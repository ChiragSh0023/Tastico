import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops! Something went wrong.</h1>
      <h2>The page you're looking for doesn't exist or an error occurred.</h2>
      <p>
        {err.status} : {err.statusText}
      </p>
    </>
  );
};

export default Error;
