import { ErrorResponse, useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
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
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
