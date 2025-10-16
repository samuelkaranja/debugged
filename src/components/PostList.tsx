import React from "react";
import { useGetPostsQuery } from "../store/slices/postsApi";
import PostCard from "./PostCard";
import { FaSpinner } from "react-icons/fa";

interface PostListProps {
  searchText: string;
}

const PostList: React.FC<PostListProps> = ({ searchText }) => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-50">
        <FaSpinner className="text-5xl animate-spin text-green-300" />
      </div>
    );
  }

  if (isError) {
    return <div className="text-2xl text-center">Error: {isError}</div>;
  }

  if (!posts?.length) {
    return (
      <div className="text-3xl mt-5 font-bold text-center">
        No Posts Available!!
      </div>
    );
  }

  const filteredPosts = posts.filter((p) =>
    p.title?.toLowerCase().includes(searchText?.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    return (
      <div className="text-2xl mt-5 font-semibold text-center text-gray-500">
        No posts found matching "{searchText}"
      </div>
    );
  }

  return (
    <>
      {filteredPosts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
