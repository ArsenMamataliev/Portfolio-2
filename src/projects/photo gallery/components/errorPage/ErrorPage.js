import { Link, useRouteError } from "react-router-dom";
import style from './errorPage.module.scss'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={style.errorPageContainer}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className={style.link} to="/">Refresh</Link>
    </div>
  );
}