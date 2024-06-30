import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full p-4 flex justify-between bg-slate-800 items-center">
      <Link to="/">
        <h1 className="text-white text-2xl font-medium">React Blog</h1>
      </Link>
      <div className="links flex justify-center gap-2">
        <Link
          to="/"
          className="nav-button"
          aria-label="Return to the homepage"
        >
          Home
        </Link>
        <Link
          to="/create"
          className="nav-button"
          aria-label="Create new blog post"
        >
          New Post
        </Link>
      </div>
    </header>
  );
};

export default Header;
