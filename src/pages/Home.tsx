import React from "react";
import Post from "../components/Post";
import SearchPost from "../components/SearchPost";

const Home: React.FC = () => {
  return (
    <div>
      <SearchPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Home;
