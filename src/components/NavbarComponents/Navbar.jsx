import React, { useState } from "react";
import logo from "../../assets/SVGs/1124_U1RVRElPIEtBVCAxMzQtMTIw.svg"; // Adjust the path to your actual logo image
import { Link } from "react-router-dom";

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
        <ul
            className={`flex-col md:flex-row md:flex space-x-4 ${
              isOpen ? "flex" : "hidden"
            } md:space-x-4 md:items-center`}
          >
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
        <div className={`${isOpen ? "hidden" : "block"} md:block`}>
          
          <div className="hidden md:flex space-x-4 items-center ml-4">
            <a
              href="/"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
            >
              Login/Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action (CTA) */}

      {/* Collapsible menu for smaller screens */}
      
    </nav>
  );
};

export default Navbar;

{
  /* <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div id="multi-dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg class="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
  </svg></button>
          <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My downloads</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Billing</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</a>
              </li>
            </ul>
        </div>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> */
}
