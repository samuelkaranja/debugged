import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { logout } from "../store/slices/authSlice";
import SearchPost from "./SearchPost";

interface NavbarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ searchText, setSearchText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth); // Get logged-in user info from Redux store

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <nav className="bg-white text-[#333] px-7 py-4 md:px-10 md:mb-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide italic">
          codedebugged
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm items-center">
          <SearchPost searchText={searchText} setSearchText={setSearchText} />
          <Link to="/" className="hover:underline transition">
            Home
          </Link>
          <Link to="/podcast" className="hover:underline transition">
            Podcast
          </Link>
          <Link to="/about-me" className="hover:underline transition">
            About
          </Link>

          {user ? (
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="relative group">
                <img
                  src={user.avatar}
                  alt={user.name || "User Avatar"}
                  className="w-9 h-9 rounded-full object-cover cursor-pointer"
                />

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="px-4 py-2 text-sm text-gray-700 truncate">
                    {user.name}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="hover:underline transition">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-5 mb-3 space-y-4 flex flex-col text-center">
          <Link
            to="/"
            className="hover:text-emerald-400 transition border-b border-gray-200 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-me"
            className="hover:text-emerald-400 transition border-b border-gray-200 pb-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {user ? (
            <>
              <div className="flex flex-col items-center mt-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mb-2"
                />
                <p className="text-sm text-gray-700">{user.name}</p>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-red-500 hover:underline mt-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="hover:text-emerald-400 transition border-b border-gray-200 pb-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
