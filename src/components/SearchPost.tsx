import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchPost: React.FC = () => {
  return (
    <form className="flex items-center border border-gray-300 rounded px-3 py-2 w-full max-w-md m-3 mx-auto">
      <FaSearch className="text-gray-700 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent focus:outline-none flex-1 text-[#333] text-sm"
      />
    </form>
  );
};

export default SearchPost;
