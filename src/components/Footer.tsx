import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 text-center mt-5">
        <p className="text-md pb-3">
          &copy; {new Date().getFullYear()} codedebugged. All rights reserved.
        </p>
        <p className="text-sm">Made with ❤️ by Samuel Karanja</p>
      </footer>
    </div>
  );
};

export default Footer;
