import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManufacturersSection = () => {
  const manufacturers = [
    {
      name: "Lenovo",
      rating: 8.8,
      modelsReviewed: 11,
      topModels: [
        {
          name: "Lenovo ThinkPad X1 Carbon",
          link: "/laptops/lenovo-thinkpad-x1-carbon",
          launchYear: 2021,
          processor: "Intel Core i7-1165G7",
          ram: "16GB",
          storage: "512GB SSD",
        },
        {
          name: "Lenovo IdeaPad 5",
          link: "/laptops/lenovo-ideapad-5",
          launchYear: 2021,
          processor: "AMD Ryzen 5 5500U",
          ram: "8GB",
          storage: "256GB SSD",
        },
        {
          name: "Lenovo Legion 5",
          link: "/laptops/lenovo-legion-5",
          launchYear: 2021,
          processor: "AMD Ryzen 7 5800H",
          ram: "16GB",
          storage: "1TB SSD",
        },
      ],
    },
    {
      name: "HP",
      rating: 8,
      modelsReviewed: 9,
      topModels: [
        {
          name: "HP Spectre x360",
          link: "/laptops/hp-spectre-x360",
          launchYear: 2021,
          processor: "Intel Core i7-1165G7",
          ram: "16GB",
          storage: "512GB SSD",
        },
        {
          name: "HP Envy 13",
          link: "/laptops/hp-envy-13",
          launchYear: 2020,
          processor: "Intel Core i5-1035G4",
          ram: "8GB",
          storage: "256GB SSD",
        },
        {
          name: "HP Pavilion 15",
          link: "/laptops/hp-pavilion-15",
          launchYear: 2021,
          processor: "AMD Ryzen 5 5500U",
          ram: "16GB",
          storage: "512GB SSD",
        },
      ],
    },
    {
      name: "Dell",
      rating: 9,
      modelsReviewed: 12,
      topModels: [
        {
          name: "Dell XPS 13",
          link: "/laptops/dell-xps-13",
          launchYear: 2021,
          processor: "Intel Core i7-1185G7",
          ram: "16GB",
          storage: "512GB SSD",
        },
        {
          name: "Dell Inspiron 15",
          link: "/laptops/dell-inspiron-15",
          launchYear: 2021,
          processor: "Intel Core i5-1135G7",
          ram: "8GB",
          storage: "256GB SSD",
        },
        {
          name: "Dell Latitude 7490",
          link: "/laptops/dell-latitude-7490",
          launchYear: 2018,
          processor: "Intel Core i7-8650U",
          ram: "16GB",
          storage: "512GB SSD",
        },
      ],
    },
    {
      name: "Apple",
      rating: 9.5,
      modelsReviewed: 15,
      topModels: [
        {
          name: "MacBook Pro 16",
          link: "/laptops/macbook-pro-16",
          launchYear: 2021,
          processor: "Apple M1 Pro",
          ram: "16GB",
          storage: "512GB SSD",
        },
        {
          name: "MacBook Air M2",
          link: "/laptops/macbook-air-m2",
          launchYear: 2022,
          processor: "Apple M2",
          ram: "8GB",
          storage: "256GB SSD",
        },
        {
          name: "MacBook Pro 14",
          link: "/laptops/macbook-pro-14",
          launchYear: 2021,
          processor: "Apple M1 Pro",
          ram: "16GB",
          storage: "512GB SSD",
        },
      ],
    },
    // Add more manufacturers as needed
  ];

  // const [manufacturers, setManufacturers] = useState([]);  
  const [showMore, setShowMore] = useState(false);
  const [sortCriterion, setSortCriterion] = useState("rating");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  // const [manufacturers, setManufacturers] = useState([]);

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

  const sortedManufacturers = [...manufacturers].sort((a, b) => {
    if (sortCriterion === "rating") {
      return b.rating - a.rating;
    } else if (sortCriterion === "modelsReviewed") {
      return b.modelsReviewed - a.modelsReviewed;
    } else if (sortCriterion === "popularity") {
      return b.popularity - a.popularity;
    }
    return 0;
  });

  const visibleManufacturers = showMore
    ? sortedManufacturers
    : sortedManufacturers.slice(0, 4);

  return (
    <section className="bg-gray-800 py-5">
      <div className="container mx-auto px-12">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl  text-white">Explore Laptop Brands</h2>
          {/* Sorting Dropdown */}
          <input
            type="text"
            placeholder="Search brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-600 text-white rounded-sm p-2"
          />
          <select
            value={sortCriterion}
            onChange={(e) => setSortCriterion(e.target.value)}
            className="bg-gray-600 text-white rounded-sm p-2"
          >
            <option value="rating">Sort by Overall Rating</option>
            <option value="modelsReviewed">Sort by Models Reviewed</option>
            <option value="popularity">Sort by Popularity</option>
          </select>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {visibleManufacturers.map((manufacturer, index) => (
            <div className="bg-gray-700 rounded-sm shadow-md w-full mx-auto overflow-hidden border border-white p-4 flex flex-col">
              {/* Brand Name */}

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl text-white text-left">
                  <Link
                    to={`../ManufacturerWebPages/${manufacturer.name.toLowerCase()}`}
                    className="hover:underline"
                    key={index}
                  >
                    {manufacturer.name}
                  </Link>
                </h3>
                <div className="text-xl text-white text-right">
                  Brand Rating: {manufacturer.rating}
                </div>
              </div>

              {/* Models Section */}
              <div className="flex flex-col gap-6">
                {manufacturer.topModels.map((model, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg shadow-md w-full p-4 flex flex-row items-center border border-gray-600"
                  >
                    {/* Model Image */}
                    <div className="w-1/7 flex items-center justify-center">
                      <Link
                        to={model.link}
                        className="text-white text-lg font-medium mb-1 hover:underline"
                      >
                        <img
                          src={`http://localhost:5000/images/${manufacturer.name}.png`}
                          alt={`${model.name} model`}
                          className="object-cover h-24 w-24 transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                      </Link>
                    </div>

                    {/* Model Details - Name, Rating, Launch Year */}
                    <div className="w-3/7 pl-4">
                      <Link
                        to={model.link}
                        className="text-white text-lg font-medium mb-1 hover:underline"
                      >
                        {model.name}
                      </Link>
                      <p className="text-white">
                        Overall Rating {manufacturer.rating}/10
                      </p>
                      <p className="text-white">
                        Launch Year: {model.launchYear}
                      </p>
                    </div>

                    {/* Specifications Column */}
                    <div className="w-3/7 pl-4 ml-80">
                      <h4 className="text-white font-bold mb-1">
                        Specifications
                      </h4>
                      <ul className="text-white list-disc list-inside">
                        <li>Processor: {model.processor}</li>
                        <li>RAM: {model.ram}</li>
                        <li>Storage: {model.storage}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* 'See More' Button */}
              <div className="text-center mt-6">
                <Link
                  to={manufacturer.link}
                  className="bg-blue-500 text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors inline-block"
                >
                  See More
                </Link>
              </div>
            </div>
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
