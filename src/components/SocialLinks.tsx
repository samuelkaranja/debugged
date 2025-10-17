import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4 text-gray-700">
        <FaFacebook className="hover:text-blue-600 cursor-pointer" size={24} />
        <FaTwitter className="hover:text-blue-400 cursor-pointer" size={24} />
        <FaInstagram className="hover:text-pink-500 cursor-pointer" size={24} />
        <FaLinkedin className="hover:text-blue-700 cursor-pointer" size={24} />
      </div>
    </div>
  );
};

export default SocialLinks;
