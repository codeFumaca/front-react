import { Link, useRouteError } from "react-router-dom";
import { ErrorBody } from "./ErrorStyled";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorBody>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
        <Link to="/">
        <p>Try refreshing the page, or click the button below to go back to the homepage.</p>
        </Link>
      </div>
    </ErrorBody>
  );
}