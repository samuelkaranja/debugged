import React, { useEffect } from "react";
import { PostList } from "../components";

interface HomeProps {
  searchText: string;
}

const Home: React.FC<HomeProps> = ({ searchText }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PostList searchText={searchText} />
    </div>
  );
};

export default Home;
