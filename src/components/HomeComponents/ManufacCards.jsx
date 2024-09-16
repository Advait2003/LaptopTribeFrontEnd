import React, { useState } from "react";
import { Link } from "react-router-dom";

const manufacturers = [
  { name: "Dell", rating: 8.5, modelsReviewed: 32 },
  { name: "HP", rating: 7.8, modelsReviewed: 28 },
  { name: "Apple", rating: 9.2, modelsReviewed: 15 },
  { name: "Lenovo", rating: 8.0, modelsReviewed: 40 },
  { name: "Asus", rating: 8.3, modelsReviewed: 25 },
  { name: "Acer", rating: 7.5, modelsReviewed: 20 },
  { name: "MSI", rating: 8.7, modelsReviewed: 22 },
  { name: "Razer", rating: 8.6, modelsReviewed: 18 },
  { name: "Samsung", rating: 7.9, modelsReviewed: 12 },
  { name: "Microsoft", rating: 8.1, modelsReviewed: 16 },
];

const ManufacturersSection = () => {
  // State to manage showing more manufacturers
  const [showMore, setShowMore] = useState(false);

  // Sort manufacturers by rating (highest to lowest)
  const sortedManufacturers = [...manufacturers].sort(
    (a, b) => b.rating - a.rating
  );

  // Display top 4 by default, and show all if "Explore More" is clicked
  const visibleManufacturers = showMore
    ? sortedManufacturers
    : sortedManufacturers.slice(0, 4);

  return (
    <section className="bg-gray-800 py-10">
      <div className="container mx-auto px-12">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          Explore Laptop Manufacturers
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleManufacturers.map((manufacturer, index) => (
            <Link
              to={`/${manufacturer.name.toLowerCase()}`} // Dynamic link to manufacturer's page
              key={index}
            >
              <div
                className="relative bg-darkblue- dark:bg-gray-800 rounded-lg shadow-md w-full mx-auto overflow-hidden"
                style={{ aspectRatio: "1 / 1" }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                  style={{
                    backgroundImage: `url(src/assets/ManufacImages/${manufacturer.name.toLowerCase()}.png)`,
                  }}
                ></div>

                {/* Overlay to darken the background for better text visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Manufacturer Details */}
                <div className="relative z-10 p-6">
                  {/* Company Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {manufacturer.name}
                  </h3>

                  {/* Overall Rating */}
                  <p className="text-white mb-1 text-center">
                    <strong>Overall Rating:</strong> {manufacturer.rating}/10
                  </p>

                  {/* Number of Models Reviewed */}
                  <p className="text-white text-center">
                    <strong>Models Reviewed:</strong> {manufacturer.modelsReviewed}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManufacturersSection;
