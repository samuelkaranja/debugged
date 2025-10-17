import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md py-4 px-5">
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4 text-gray-700">
        <FaFacebook className="text-blue-600 cursor-pointer" size={24} />
        <FaTwitter className="text-blue-400 cursor-pointer" size={24} />
        <FaInstagram className="text-pink-500 cursor-pointer" size={24} />
        <FaLinkedin className="text-blue-700 cursor-pointer" size={24} />
      </div>
    </div>
  );
};

export default SocialLinks;
