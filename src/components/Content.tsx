import React from "react";
//import Code from "../assets/code.jpg";

interface Post {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  author: string;
  created_at: string;
  image_url: string;
}

const PostContent: React.FC<Post> = (post) => {
  // 📅 Format created_at date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long", // e.g. September
      day: "numeric",
    });
  };

  return (
    <article>
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        By <span className="font-medium">{post.author}</span> | Published on{" "}
        {formatDate(post.created_at)}
      </p>

      <p>{post.subtitle}</p>

      <div className="mt-5 mb-5 w-full h-80">
        <img
          className="rounded w-full h-full object-cover"
          src={post.image_url}
          alt={post.title}
        />
      </div>

      {/* Render HTML content safely */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default PostContent;
