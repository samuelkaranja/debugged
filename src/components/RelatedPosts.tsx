import React from "react";

const posts = [
  { title: "Introduction to Algorithms", date: "January 10, 2024" },
  { title: "Python Best Practices", date: "January 5, 2024" },
  { title: "Debugging Techniques", date: "December 20, 2023" },
];

const RelatedPosts: React.FC = () => {
  return (
    <div className="border border-gray-200  p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 underline">Related Posts</h3>
      <ul className="space-y-3">
        {posts.map((post, index) => (
          <li key={index} className="border-b border-gray-200 pb-2">
            <p className="font-medium hover:underline cursor-pointer">
              {post.title}
            </p>
            <p className="text-xs text-gray-400">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPosts;
