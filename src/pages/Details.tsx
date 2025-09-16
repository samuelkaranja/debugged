import React from "react";
import { posts } from "../Posts";
import { useParams } from "react-router-dom";
import Content from "../components/Content";
import RelatedPosts from "../components/RelatedPosts";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className=" min-h-screen text-[#333]">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="lg:col-span-2">{post && <Content {...post} />}</div>

        {/* Sidebar */}
        <aside>
          <RelatedPosts />
        </aside>
      </div>
    </div>
  );
};

export default Details;
