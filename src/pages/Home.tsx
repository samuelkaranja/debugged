import React, { useEffect } from "react";
import {
  Categories,
  PopularPosts,
  PostList,
  SearchPost,
  SocialLinks,
} from "../components";

interface HomeProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ searchText, setSearchText }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-100 md:w-170 lg:w-170 mt-2 mx-auto bg-white">
        <SearchPost searchText={searchText} setSearchText={setSearchText} />
      </div>
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
    </>
  );
};

export default Home;
