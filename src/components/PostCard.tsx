import React from "react";
import { Link } from "react-router-dom";
import { formatDate, truncateText } from "../utils/helpers";
import type { Post } from "../store/types";

type PostProps = {
  post: Post;
};

const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div
      className="md:w-1/2 mx-auto md:border border-gray-200 md:shadow p-5 rounded-lg mb-4"
      key={post.id}
    >
      <h1 className="text-3xl text-[#21262b]">{post.title}</h1>
      <div className="mt-2 text-sm text-gray-600">
        <span>By {post.author} | </span>
        <span>{formatDate(post.created_at)}</span>
      </div>
      <div className="mt-3">
        <p className="text-md text-gray-800">
          {truncateText(post.subtitle, 100)}
        </p>
      </div>
      <div className="mt-4 w-full md:h-70">
        <img
          className="rounded w-full h-full object-cover"
          src={post.image_url}
          alt="codesnippet"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <Link
          to={`/details/${post.id}`}
          className="text-blue-600 hover:underline text-sm underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
