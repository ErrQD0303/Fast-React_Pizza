import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "../components/Loader";
import { ILocalStorageData } from "../types/localStorage";
import { useDispatch } from "react-redux";
import { updateName } from "../store/userSlice";
import { AppDispatch } from "../store/store";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const { username } = useLoaderData() as ILocalStorageData;
  const dispatch = useDispatch<AppDispatch>();

  if (username) {
    dispatch(updateName(username));
  }

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
