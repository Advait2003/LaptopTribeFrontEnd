import React from "react";
import logo from "../../assets/SVGs/1124_U1RVRElPIEtBVCAxMzQtMTIw.svg"; // Adjust the path to your actual logo image

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo and text aligned and clickable */}
        <a href="/" className="flex items-center space-x-4">
          <img src={logo} alt="LaptopTribeLogo" className="h-12 w-12" />
          <span className="text-3xl font-bold text-white">LaptopTribe</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <a
              href="/top-rated"
              className="px-4 py-2 rounded-md transition duration-300 bg-gray-700 text-white hover:bg-gray-600"
            >
              Top Rated
            </a>
          </li>
          <li>
            <a
              href="/share-review"
              className="px-4 py-2 rounded-md transition duration-300 bg-gray-700 text-white hover:bg-gray-600"
            >
              Share Your Review
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="px-4 py-2 rounded-md transition duration-300 bg-gray-700 text-white hover:bg-gray-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Call to Action (CTA) */}
        <div className="flex space-x-4 items-center ml-6">
          <a
            href="/login-signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
          >
            Login/Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
