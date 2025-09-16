import React from "react";
import Code from "../assets/code.jpg";
import { Link } from "react-router-dom";

interface PostProps {
  post: {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <div className="md:w-1/2 mx-auto md:border border-gray-200 md:shadow p-5 rounded-lg mb-4">
        <h1 className="text-3xl text-[#21262b]">{post.title}</h1>
        <div className="mt-2 text-sm text-gray-600">
          <span>By Samuel Karanja | </span>
          <span>Sep 15, 2025</span>
        </div>
        <div className="mt-3">
          <p className="text-md text-gray-800">{post.subtitle}</p>
        </div>
        <div className="mt-4 w-full h-64">
          <img
            className="rounded w-full h-full object-cover"
            src={post.image || Code}
            alt="codesnippet"
          />
        </div>
        <div className="mt-4">
          <Link
            to={`/details/${post.id}`}
            className="text-blue-600 hover:underline text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;
