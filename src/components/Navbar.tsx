import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-[#333] px-7 py-4 md:px-10 md:mb-5 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide italic">
          codedebugged
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm">
          <Link to="/" className="hover:underline transition">
            Home
          </Link>
          <Link to="/about-me" className="hover:underline transition">
            About
          </Link>
          <Link to="/contact" className="hover:underline transition">
            Contact
          </Link>
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
            to="/about"
            className="hover:text-emerald-400 transition border-b border-gray-200 pb-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-emerald-400 transition border-b border-gray-200 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
