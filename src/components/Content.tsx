import React from "react";
import Code from "../assets/code.jpg";

interface Post {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

const PostContent: React.FC<Post> = (post) => {
  return (
    <article>
      <h1 className="text-4xl font-bold mb-2">{post?.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        By <span className="font-medium">Sarah Chen</span> | Published on
        January 15, 2024
      </p>

      <p>{post?.subtitle}</p>

      <div className="mt-5 mb-5 w-full h-80">
        <img
          className="rounded w-full h-full object-cover"
          src={post?.image || Code}
          alt="codesnippet"
        />
      </div>

      <p className="mb-4 leading-loose">{post?.description}</p>
    </article>
  );
};

export default PostContent;
