import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
