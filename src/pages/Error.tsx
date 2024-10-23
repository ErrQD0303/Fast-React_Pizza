import { ErrorResponse, useRouteError } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import { useSelector } from "react-redux";
import { getUsername } from "../store/userSlice";

function NotFound() {
  const error = useRouteError();
  const username = useSelector(getUsername);

  const isErrorResponse = (error: unknown): error is ErrorResponse => {
    return (error as ErrorResponse)?.data !== undefined;
  };
  const isTypeError = (error: unknown): error is TypeError => {
    return error instanceof TypeError;
  };
  const isAuthenticated = !!username;

  let errorMessage: string | JSX.Element = "";
  if (isErrorResponse(error)) errorMessage = error.data;
  else if (isTypeError(error)) errorMessage = error.message;
  else if (!isAuthenticated)
    errorMessage = (
      <>
        Access Denied!!!
        <br />
        Please <LinkButton to="/">Login</LinkButton>.
      </>
    );
  else errorMessage = "Unexpected Error!!!";

  return (
    <div className="px-6 py-5">
      <h1 className="text-lg font-semibold">Something went wrong 😢</h1>
      <p className="my-4 rounded-md bg-red-100 p-4 text-sm font-medium text-red-700">
        {errorMessage}
      </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
