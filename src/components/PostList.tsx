import React from "react";
import { useGetPostsQuery } from "../store/slices/postsApi";
import PostCard from "./PostCard";
import { FaSpinner } from "react-icons/fa";

interface PostListProps {
  searchText: string;
}

const PostList: React.FC<PostListProps> = ({ searchText }) => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-50">
        <FaSpinner className="text-5xl animate-spin text-green-300" />
      </div>
    );
  }

  if (isError) {
    let errorMessage =
      "Unable to connect to the server. Please try again later.";

    // Optional detailed handling
    if (error && "status" in error) {
      if (error.status === "FETCH_ERROR") {
        errorMessage = "Network error: Backend not reachable.";
      } else if (error.status === 500) {
        errorMessage = "Server error. Please try again later.";
      } else if (error.status === 404) {
        errorMessage = "Requested resource not found.";
      }
    }

    return (
      <div className="flex flex-col items-center justify-center mt-10 space-y-3">
        <p className="text-xl font-semibold text-red-500">{errorMessage}</p>
        <p className="text-gray-500">We’re working to fix the issue...</p>
        <button
          onClick={() => refetch()}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Retry
        </button>
      </div>
    );
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
