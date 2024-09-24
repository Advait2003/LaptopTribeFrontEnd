import React, { useState } from "react";
import logo from "../../assets/SVGs/1124_U1RVRElPIEtBVCAxMzQtMTIw.svg"; // Adjust the path to your actual logo image
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and text aligned and clickable */}
        <a href="/" className="flex items-center space-x-4 ml-4">
          <img src={logo} alt="LaptopTribeLogo" className="h-12 w-12" />
          <span className="text-3xl font-bold text-white">LaptopTribe</span>
        </a>

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex space-x-4 ${isOpen ? "flex" : "hidden"} md:space-x-4 md:items-center`}>

          <li>
            <Link
              to="/share-review"
              className="block px-4 py-2 mt-2 text-white md:mt-0 rounded-md transition duration-300 bg-gray-700 hover:bg-gray-600"
            >
              Share Your Review
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 mt-2 text-white md:mt-0 rounded-md transition duration-300 bg-gray-700 hover:bg-gray-600"
            >
              Forum
            </Link>
          </li>
        </ul>

        {/* Call to Action (CTA) */}
        <div className="hidden md:flex space-x-4 items-center ml-4">
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
          >
            Login/Sign Up
          </a>
        </div>
      </div>

      {/* Collapsible menu for smaller screens */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="space-y-2 px-4 pb-4">
          <li>
            <a
              href="/top-rated"
              className="block px-4 py-2 text-white rounded-md bg-gray-700 hover:bg-gray-600"
            >
              Top Rated
            </a>
          </li>
          <li>
            <a
              href="/share-review"
              className="block px-4 py-2 text-white rounded-md bg-gray-700 hover:bg-gray-600"
            >
              Share Your Review
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block px-4 py-2 text-white rounded-md bg-gray-700 hover:bg-gray-600"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/login-signup"
              className="block px-4 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-500"
            >
              Login/Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
