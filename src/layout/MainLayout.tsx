import React from "react";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
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
