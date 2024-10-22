import { ErrorResponse, useRouteError } from "react-router-dom";
import LinkButton from "../components/LinkButton";

function NotFound() {
  const error = useRouteError();

  const isErrorResponse = (error: unknown): error is ErrorResponse => {
    return (error as ErrorResponse).data !== undefined;
  };
  const isTypeError = (error: unknown): error is TypeError => {
    return error instanceof TypeError;
  };

  let errorMessage: string = "";
  if (isErrorResponse(error)) errorMessage = error.data;
  else if (isTypeError(error)) errorMessage = error.message;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
