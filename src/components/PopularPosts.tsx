import React from "react";
import Blog from "../assets/blog.jpg";
import { FaRegClock } from "react-icons/fa";

interface Post {
  id: number;
  title: string;
  date: string;
  thumbnail: string;
}

const PopularPosts: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: "How To Create A Complete Comment Section Using React",
      date: "February 14, 2025",
      thumbnail: Blog,
    },
    {
      id: 2,
      title: "How To Make A Responsive Website Using HTML & CSS",
      date: "January 12, 2024",
      thumbnail: Blog,
    },
    {
      id: 3,
      title: "How To Build a Restaurant Website Using React",
      date: "July 07, 2025",
      thumbnail: Blog,
    },
    {
      id: 4,
      title: "Build and Deploy a Car Rental App",
      date: "July 16, 2025",
      thumbnail: Blog,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-5">
      <h3 className="text-lg font-semibold pb-2 mb-1">Popular Posts</h3>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center gap-3 hover:bg-gray-50 p-2 transition-colors cursor-pointer border-b border-gray-200"
          >
            {/* Thumbnail */}
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-16 h-12 rounded object-cover flex-shrink-0"
            />

            {/* Text */}
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-800 hover:text-blue-600 hover:underline line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1 space-x-1">
                <FaRegClock className="text-gray-400" size={12} />
                <span>{post.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;
