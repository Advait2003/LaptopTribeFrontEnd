import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LatestReviews = () => {
  // Dummy data for the latest reviews
  const reviews = [
    {
      id: 1, // Add an ID for routing
      laptopName: "Dell XPS 13",
      date: "2023-10-12",
      author: "John Doe",
      authorImage: "https://via.placeholder.com/40",
      specs: "Intel Core i7, 16GB RAM, 512GB SSD",
      rating: 9,
    },
    {
      id: 2,
      laptopName: "HP Spectre x360",
      date: "2023-10-11",
      author: "Jane Smith",
      authorImage: "https://via.placeholder.com/40",
      specs: "Intel Core i5, 8GB RAM, 256GB SSD",
      rating: 8,
    },
    {
      id: 3,
      laptopName: "Apple MacBook Air M2",
      date: "2023-10-10",
      author: "Alice Johnson",
      authorImage: "https://via.placeholder.com/40",
      specs: "Apple M2, 8GB RAM, 512GB SSD",
      rating: 9.5,
    },
    {
      id: 4,
      laptopName: "Lenovo ThinkPad X1 Carbon",
      date: "2023-10-09",
      author: "Michael Brown",
      authorImage: "https://via.placeholder.com/40",
      specs: "Intel Core i7, 16GB RAM, 1TB SSD",
      rating: 8.8,
    },
    {
      id: 5,
      laptopName: "Asus ROG Zephyrus G14",
      date: "2023-10-08",
      author: "David Lee",
      authorImage: "https://via.placeholder.com/40",
      specs: "AMD Ryzen 9, 16GB RAM, 1TB SSD",
      rating: 9.1,
    },
  ];

  // State for pagination
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < reviews.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const displayedReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-gray-600 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white text-left mb-4">Latest Reviews</h2>

        <div className="relative flex items-center">
          <div className="flex overflow-hidden space-x-4 p-4 w-full transition-transform duration-300 ease-in-out">
            {displayedReviews.map((review) => (
              <Link
                key={review.id}
                to={`/reviews/${review.id}`} // Use your review page route
                className="bg-gray-900 text-white rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 w-64 flex-shrink-0"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {review.laptopName}
                </h3>
                <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
                  <p>{review.date}</p>
                  <p>{review.author}</p>
                </div>
                {/* <div className="flex items-center mb-2">
                  <img
                    src={review.authorImage}
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p className="text-gray-300 text-sm">{review.author}</p> */}
                {/* </div> */}
                <p className="text-gray-400 mb-2">{review.specs}</p>
                <p className="font-bold text-yellow-400">
                  Rating: {review.rating}
                </p>
              </Link>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrevious}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 py-2 px-3 rounded-full hover:bg-gray-400 transition-colors duration-200 ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={startIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.293a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 10H17a1 1 0 110 2H8.414l3.879 3.879a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 py-2 px-3 rounded-full hover:bg-gray-400 transition-colors duration-200 ${
              startIndex + itemsPerPage >= reviews.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={startIndex + itemsPerPage >= reviews.length}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 4.707a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10H3a1 1 0 110-2h8.586l-3.879-3.879a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestReviews;

