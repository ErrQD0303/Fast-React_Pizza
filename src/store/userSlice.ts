function getPosition(): Promise<GeolocationCoordinates> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error),
    );
  });
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPosition, IUserState } from "../types/user";
import { RootState } from "./store";
import { getAddress } from "../services/apiGeocoding";
import { setLocalStorageData } from "../services/localStorageData";

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = (await getPosition()) as GeolocationCoordinates;
    const position: IPosition = {
      latitude: positionObj.latitude,
      longitude: positionObj.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  },
);

export const updateName = createAsyncThunk(
  "user/updateName",
  async function (username: string) {
    setLocalStorageData({ username });
    return username;
  },
);

const initialState: IUserState = {
  username: "",
  status: "idle",
  position: {} as IPosition,
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /* 
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    }, */
  },
  extraReducers: (builder) =>
    builder
      .addCase(updateName.fulfilled, (state, action) => {
        state.username = action.payload;
      })
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address. Make sure to fill this field!";
      }),
});

// export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = (state: RootState) => state.user.username;

export const getUser = (state: RootState) => state.user;
