import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord ,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8">
      <div className="container justify-center mx-auto px-4">
        {/* Links Section */}
        <div className="flex justify-center mb-4 space-x-8">
          <a href="/about-us" className="hover:text-gray-400">
            About Us
          </a>
          <a href="/privacy-policy" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className="hover:text-gray-400">
            Terms & Conditions
          </a>
          <a href="/contact-us" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-gray-400"
              size="lg"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-gray-400"
              size="lg"
            />
          </a>
          
          <a href="https://discord.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faDiscord}
          className="hover:text-gray-400"
          size="lg"
        />
      </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} LaptopTribe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
