import React, { useEffect } from "react";
import Post from "../components/Post";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Post />
    </div>
  );
};

export default Home;
