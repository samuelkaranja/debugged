import React from "react";

const Categories: React.FC = () => {
  const categories = [
    "Technology",
    "Lifestyle",
    "Business",
    "Health",
    "Travel",
  ];

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat}
            className="text-gray-700 hover:text-blue-500 cursor-pointer transition-colors"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
