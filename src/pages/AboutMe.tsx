import React from "react";
import Profile from "../components/Profile";
//import coder from "../assets/code1.jpg";
import Sam from "../assets/Sam.jpeg";

const AboutMe: React.FC = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-10 justify-center items-center md:items-start pt-10 px-5">
      {/* Profile Section */}
      <div className="w-full md:w-1/2">
        <Profile />
      </div>

      {/* Image Section */}
      <div className="hidden md:flex justify-center items-center md:w-85 md:h-85">
        <img
          src={Sam}
          alt="Coding illustration"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutMe;
