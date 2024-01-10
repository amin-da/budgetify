import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-full">
      <h1>Oh ! we've got a problem!</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex gap-4">
        <button
          className="btn bg-black text-white hover:text-black"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
        <Link to={"/"}>
          <button className="btn bg-black text-white hover:text-black">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
