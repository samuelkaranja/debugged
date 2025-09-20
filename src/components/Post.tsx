import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { AppDispatch, RootState } from "../store/store";
import { fetchPosts } from "../store/slices/postsSlice";

const Post: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // 📅 Format created_at date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long", // e.g. September
      day: "numeric",
    });
  };

  // ✂️ Truncate subtitle
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
  };

  if (loading) {
    return <div className="text-2xl text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-2xl text-center">Error: {error}</div>;
  }

  if (!posts.length) {
    return (
      <div className="text-3xl mt-5 font-bold text-center">
        No Posts Available!!
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
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
      ))}
    </>
  );
};

export default Post;
