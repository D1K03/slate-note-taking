import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 md:px-12 sticky top-0 z-50 shadow-md w-full bg-white">
      <h1 className="text-3xl font-bold">
        <Link to="/" className="hover:text-slate-600 transition-colors">
          Slate
        </Link>
      </h1>
      <div className="flex gap-6 md:gap-8 items-center">
        <Link to="/signup" className="hover:text-slate-600 transition-colors font-medium text-base">
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-slate-800 text-white px-5 py-2 rounded-md hover:bg-slate-700 transition-colors font-medium text-base"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
