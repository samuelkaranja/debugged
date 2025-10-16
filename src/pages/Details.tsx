import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../store/slices/postsApi";
import { Breadcrumbs, PostContent, RelatedPosts } from "../components";
import { FaSpinner } from "react-icons/fa";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, error } = useGetPostByIdQuery(Number(id));

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-50">
        <FaSpinner className="text-5xl animate-spin text-green-300" />
      </div>
    );
  if (error) return <p className="text-2xl text-center">Error fetching post</p>;
  if (!post) return <p className="text-2xl text-center">No post found</p>;

  return (
    <div className="min-h-screen text-[#333]">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="lg:col-span-2">
          <PostContent {...post} />
        </div>

        {/* Sidebar */}
        <aside>
          <RelatedPosts />
        </aside>
      </div>
    </div>
  );
};

export default Details;
