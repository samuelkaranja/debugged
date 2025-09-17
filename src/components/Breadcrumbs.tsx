import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center text-sm text-gray-500 mb-1 ml-4 mt-3 md:ml-33">
      <Link to="/" className="hover:text-blue-600 hover:underline">
        Home
      </Link>

      {pathnames.map((value, index) => {
        const to = ">" + pathnames.slice(0, index + 1).join(">");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to} className="flex items-center">
            <span className="mx-2">{">"}</span>
            {isLast ? (
              <span className="text-gray-700 capitalize">
                {decodeURIComponent(value)}
              </span>
            ) : (
              <Link to={to} className="hover:text-blue-600 capitalize">
                {decodeURIComponent(value)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
