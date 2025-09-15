import React from "react";
import Code from "../assets/code.jpg";
import { Link } from "react-router-dom";

const Post: React.FC = () => {
  return (
    <div className="md:w-1/2 mx-auto border border-gray-200 shadow p-5 rounded-lg mb-4">
      <h1 className="text-3xl text-[#21262b]">Solving the FizzBuzz Problem</h1>
      <div className="mt-2 text-sm text-gray-600">
        <span>By John Doe - </span>
        <span>April 10, 2024 - </span>
        <span>Programming</span>
      </div>
      <div className="mt-3">
        <p className="text-md text-gray-800">
          This article explains how to solve the FizzBuzz problem using
          different programming languages and approaches.
        </p>
      </div>
      <div className="mt-4 w-full h-64">
        <img
          className="rounded w-full h-full object-cover"
          src={Code}
          alt="codesnippet"
        />
      </div>
      <div className="mt-4">
        <Link to="/" className="text-blue-600 hover:underline text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Post;
