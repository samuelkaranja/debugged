import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchPostProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchPost: React.FC<SearchPostProps> = ({
  searchText,
  setSearchText,
}) => {
  return (
    <form className="flex items-center border border-gray-200 rounded px-3 py-2 w-full">
      <FaSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search post..."
        className="bg-transparent focus:outline-none flex-1 text-[#333] text-sm"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchPost;
