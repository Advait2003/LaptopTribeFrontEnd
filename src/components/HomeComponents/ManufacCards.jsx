import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManufacturersSection = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [sortCriterion, setSortCriterion] = useState("rating"); // Default sorting by rating

  // Fetch manufacturers data from the backend
  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/manufacturers"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setManufacturers(data);
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };

    fetchManufacturers();
  }, []);

  // Sorting logic based on the selected criterion
  const sortedManufacturers = [...manufacturers].sort((a, b) => {
    if (sortCriterion === "rating") {
      return b.rating - a.rating; // Sort by rating (high to low)
    } else if (sortCriterion === "modelsReviewed") {
      return b.modelsReviewed - a.modelsReviewed; // Sort by models reviewed (high to low)
    } else if (sortCriterion === "popularity") {
      // If you have a popularity field, replace the following with the correct property
      return b.modelsReviewed - a.modelsReviewed; // Adjust this based on your data
    }
    return 0; // Default case
  });

  const visibleManufacturers = showMore
    ? sortedManufacturers
    : sortedManufacturers.slice(0, 4);

  return (
    <section className="bg-gray-800 py-10">
      <div className="container mx-auto px-12">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Explore Laptop Manufacturers
          </h2>
          {/* Sorting Dropdown */}
          <select
            value={sortCriterion}
            onChange={(e) => setSortCriterion(e.target.value)}
            className="bg-gray-600 text-white rounded-md p-2"
          >
            <option value="rating">Sort by Overall Rating</option>
            <option value="modelsReviewed">Sort by Models Reviewed</option>
            <option value="popularity">Sort by Popularity</option>
          </select>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleManufacturers.map((manufacturer, index) => (
            <Link
              to={`../ManufactuterWebPages/${manufacturer.name.toLowerCase()}`} // Dynamic link to manufacturer's page
              key={index}
            >
              <div className="bg-darkblue- dark:bg-gray-800 rounded-lg shadow-md w-full mx-auto overflow-hidden flex flex-col border border-gray-300 dark:border-gray-700">
                {/* Background Image */}
                <div
                  className="bg-cover bg-center h-0 w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
                  style={{
                    paddingBottom: "100%", // Maintains a 1:1 aspect ratio for the image
                    backgroundImage: `url(http://localhost:5000/images/${manufacturer.name.toLowerCase()}.png)`,
                  }}
                ></div>

                {/* Manufacturer Details */}
                <div className="p-6 bg-black bg-opacity-40">
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
                    <strong>Models Reviewed:</strong>{" "}
                    {manufacturer.modelsReviewed}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          {manufacturers.length > 4 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManufacturersSection;
