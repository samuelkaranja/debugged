import React from "react";
import Code from "../assets/code.jpg";
import { posts } from "../Posts";
import { useParams } from "react-router-dom";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className="w-1/2 mx-auto p-5">
      <h1 className="text-4xl text-bold mt-2">{post?.title}</h1>
      <div className="mt-3 text-sm text-gray-600">
        <span>By Samuel Karanja - </span>
        <span>Sep 15, 2025 - </span>
        <span>Programming</span>
      </div>
      <div className="mt-3">
        <p className="text-md text-gray-800">{post?.subtitle}</p>
      </div>
      <div className="mt-4 w-full h-70">
        <img
          className="rounded w-full h-full object-cover"
          src={post?.image || Code}
          alt="codesnippet"
        />
      </div>
      <div>
        <p className="mt-4 text-gray-800">
          {post?.description || "No description available for this post."}
        </p>
      </div>
    </div>
  );
};

export default Details;
