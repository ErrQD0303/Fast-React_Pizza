export interface IUserState {
  username: string;
  status: string;
  position: IPosition;
  address: string;
  error: string;
}

export interface IPosition {
  latitude: number;
  longitude: number;
}
