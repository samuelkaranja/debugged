import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchPosts } from "../store/slices/postsSlice";
import PostCard from "./PostCard";

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loadingPosts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    //Only fetch if not already loaded
    if (!posts.length) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  if (loadingPosts) {
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
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
