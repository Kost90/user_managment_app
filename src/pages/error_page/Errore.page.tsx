import { useRouteError, Link } from "react-router-dom";

interface RouteError {
    data: string;
    message: string;
    internal: boolean;
    status: number;
    statusText: string;
  }

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'}>Go to home page</Link>
    </div>
  );
}