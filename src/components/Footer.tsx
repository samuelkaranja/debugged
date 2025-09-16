import React from "react";
import { FiFacebook, FiGithub, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 text-center mt-5">
        <p className="text-md pb-3">
          &copy; {new Date().getFullYear()} codedebugged. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-7 mb-4 mt-2">
          <li>
            <Link to="/">
              <FiFacebook className="text-blue-500 w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiInstagram className="text-pink-500 w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiGithub className="text-black w-5 h-5" />
            </Link>
          </li>
        </ul>
        <p className="text-sm">Made with ❤️ by Samuel Karanja</p>
      </footer>
    </div>
  );
};

export default Footer;
