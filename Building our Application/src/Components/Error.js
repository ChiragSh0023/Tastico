import { Link, useRouteError } from "react-router-dom";
import pageNotFound from "../assets/img/pageNotFound.jpg";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <img src={pageNotFound} className="err-img" height="257" width="257" />
      <h1 className="error-ele">Oops! Something went wrong.</h1>
      <h2 className="error-ele">
        The page you're looking for doesn't exist or an error occurred.
      </h2>
      <p className="error-ele">
        {err.status} : {err.statusText}
      </p>
      <button className="border border-solid border-[#f0f0f0] w-28 rounded-lg h-9 text-center bg-white">
        <Link to="/" style={{ color: "black" }}>
          Go to Home!
        </Link>
      </button>
    </div>
  );
};

export default Error;
