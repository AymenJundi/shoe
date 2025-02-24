import React from "react";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 text-white py-2 px-4 flex justify-between items-center text-sm md:text-base fixed w-full top-0 left-0 z-10">
      {/* Phone Number */}
      <span className="font-semibold">📞 +123 456 7890</span>

      {/* Social Links */}
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition duration-300"
        >
          🌐 Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition duration-300"
        >
          🐦 Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition duration-300"
        >
          📸 Instagram
        </a>
      </div>
    </div>
  );
};

export default TopBar;