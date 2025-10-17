import React, { useEffect } from "react";
import { Categories, PopularPosts, PostList, SocialLinks } from "../components";

interface HomeProps {
  searchText: string;
}

const Home: React.FC<HomeProps> = ({ searchText }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-5 px-4 md:px-15 py-4">
      <div className="md:w-1/5 hidden md:block">
        <Categories />
      </div>
      <div className="w-full md:w-3/5">
        <PostList searchText={searchText} />
      </div>
      <div className="md:w-1/5 hidden md:block">
        <SocialLinks />
        <PopularPosts />
      </div>
    </div>
  );
};

export default Home;
