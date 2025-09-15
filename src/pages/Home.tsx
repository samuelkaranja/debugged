import React from "react";
import Post from "../components/Post";
import SearchPost from "../components/SearchPost";
import { posts } from "../Posts";

const Home: React.FC = () => {
  return (
    <div>
      <SearchPost />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
