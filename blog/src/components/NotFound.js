import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NotFound = () => {
  return (
    <div className="content-container flex flex-col justify-center">
      <h2 className="flex justify-center items-center font-semibold text-xl mt-10 mb-10">
        Oops, Page Not Found
      </h2>
      <Link
        className="nav-button font-semibold text-white bg-slate-700 hover:bg-slate-600 m-auto"
        to="/"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
