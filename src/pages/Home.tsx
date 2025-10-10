import React, { useEffect } from "react";
import { PostList } from "../components";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PostList />
    </div>
  );
};

export default Home;
