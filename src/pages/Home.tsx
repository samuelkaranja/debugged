import React, { useEffect } from "react";
import { Categories, PostList, SocialLinks } from "../components";

interface HomeProps {
  searchText: string;
}

const Home: React.FC<HomeProps> = ({ searchText }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-18 px-8 py-4">
      <div className="md:w-1/5 hidden md:block">
        <Categories />
      </div>
      <div className="w-full md:w-3/5">
        <PostList searchText={searchText} />
      </div>
      <div className="md:w-1/5 hidden md:block">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Home;
