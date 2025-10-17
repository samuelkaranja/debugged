import React from "react";
import {
  FaLaptopCode,
  FaLeaf,
  FaBriefcase,
  FaHeartbeat,
  FaPlane,
} from "react-icons/fa";

const Categories: React.FC = () => {
  const categories = [
    { name: "Technology", icon: <FaLaptopCode className="text-blue-500" /> },
    { name: "Lifestyle", icon: <FaLeaf className="text-green-500" /> },
    { name: "Business", icon: <FaBriefcase className="text-gray-600" /> },
    { name: "Health", icon: <FaHeartbeat className="text-red-500" /> },
    { name: "Travel", icon: <FaPlane className="text-purple-500" /> },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md py-4 px-5">
      <h3 className="text-xl font-semibold mb-4">Categories</h3>
      <ul className="space-y-3">
        {categories.map((cat, index) => (
          <li
            key={cat.name}
            className={`flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-500 cursor-pointer transition-colors pb-1 ${
              index !== categories.length - 1
                ? "border-b border-dotted border-gray-300"
                : ""
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
