import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getUsername } from "../store/userSlice";
import Error from "../pages/Error";

type Props = { children: ReactNode };

const ProtectedRoute = ({ children }: Props) => {
  const username = useSelector(getUsername);
  const isLoggedIn = !!username;
  return isLoggedIn ? <>{children}</> : <Error />;
};

export default ProtectedRoute;
