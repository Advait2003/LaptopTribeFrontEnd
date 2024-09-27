// components/LatestReviews.js
import React, { useState, useEffect } from "react";
// import axios from 'axios';

const MidSection = () => {
  const [reviews, setReviews] = useState([]);

  return (
    <div>
      <section className="bg-gray-900 text-white py-4 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestLaptopReviews.map((laptop, index) => (
            <Link
              to={`../LaptopReviewPages/${laptop.modelName.toLowerCase()}`} // Dynamic link to laptop's review page
              key={index}
            >
              <div className="bg-darkblue- dark:bg-gray-800 rounded-lg shadow-md w-full mx-auto overflow-hidden flex flex-col border border-gray-300 dark:border-gray-700">
                {/* Background Image */}
                <div
                  className="bg-cover bg-center h-0 w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
                  style={{
                    paddingBottom: "100%", // Maintains a 1:1 aspect ratio for the image
                    backgroundImage: `url(http://localhost:5000/images/${laptop.modelName.toLowerCase()}.png)`,
                  }}
                ></div>

                {/* Laptop Details */}
                <div className="p-6 bg-black bg-opacity-40">
                  {/* Laptop Model */}
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {laptop.modelName}
                  </h3>

                  {/* Review Score */}
                  <p className="text-white mb-1 text-center">
                    <strong>Review Score:</strong> {laptop.reviewScore}/10
                  </p>

                  {/* Summary */}
                  <p className="text-white text-center">
                    <strong>Review Summary:</strong> {laptop.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-gray-700 text-white py-4 text-left">
        <div className="container mx-4 px-2">
          <h2 className="text-3xl font-bold text-left mb-12">
            Top Rated Laptops
          </h2>
          <div className="space-y-8">
            {reviews.map((review) => (
              <div key={review._id} className="bg-gray-800 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-semibold mb-2">
                  {review.laptopModel}
                </h3>
                <p className="text-lg mb-2">
                  <strong>Owner:</strong> {review.ownerName}
                </p>
                <p className="text-lg mb-2">
                  <strong>Rating:</strong> {review.rating}/10
                </p>
                <p className="text-lg mb-2">
                  <strong>Country of Origin:</strong> {review.countryOfOrigin}
                </p>{" "}
                {/* Added country of origin */}
                <p>{review.reviewText}</p>
                <p className="text-sm text-gray-400 mt-4">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidSection;
