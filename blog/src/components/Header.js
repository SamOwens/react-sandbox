const Header = () => {
  return (
    <header className="w-full p-4 flex justify-between bg-slate-800 items-center">
      <h1 className="text-white text-2xl font-medium">React Blog</h1>
      <div className="links flex justify-center">
        <a
          href="/"
          className="me-4 p-2 text-white bg-slate-600 rounded-md hover:bg-slate-700 transition-all duration-200 ease-in-out"
          aria-label="Return to the homepage"
        >
          Home
        </a>
        <a
          href="/create"
          className="p-2 text-white bg-slate-600 rounded-md hover:bg-slate-700 transition-all duration-200 ease-in-out"
          aria-label="Create new blog post"
        >
          New Post
        </a>
      </div>
    </header>
  );
};

export default Header;
