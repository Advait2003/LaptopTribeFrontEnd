import React from "react";
import { Link } from "react-router-dom";

const DiscordPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold text-white mb-4">
        Join Our Laptop Community!
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Want to join our community? You can now be a part of our laptop
        community for just $2 a month!
      </p>
      <Link
        to="https://discord.com/invite/yourdiscordlink" // Replace with your actual Discord invite link
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300 text-lg font-semibold"
      >
        Join Now
      </Link>
      <div className="mt-10">
        <img
          src="https://example.com/discord-image.jpg" // Replace with a catchy image related to your community
          alt="Discord Community"
          className="h-64 w-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default DiscordPage;
