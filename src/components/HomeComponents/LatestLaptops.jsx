import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LatestLaptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [current, setCurrent] = useState(1); // Start at 1 for infinite loop
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef();
  const sliderRef = useRef();

  // Fetch laptops
  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/laptops/");
        setLaptops(res.data);
        setCurrent(1); // Reset to 1 when data loads
      } catch (err) {
        setLaptops([]);
      }
    };
    fetchLaptops();
  }, []);

  // Auto slide (only depend on laptops.length for stability)
  useEffect(() => {
    if (laptops.length > 0) {
      startAutoSlide();
      return () => stopAutoSlide();
    }
  }, [laptops.length]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Infinite loop logic
  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  // Prepare slides with clones
  const slides =
    laptops.length > 0
      ? [laptops[laptops.length - 1], ...laptops, laptops[0]]
      : [];

  // Handle transition end for infinite effect
  const handleTransitionEnd = () => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(laptops.length);
    } else if (current === slides.length - 1) {
      setIsTransitioning(false);
      setCurrent(1);
    }
  };

  if (laptops.length === 0) {
    return (
      <section className="bg-gray-800 py-5 relative w-full">
        <div className="container mx-auto px-0 sm:px-12"> 
          <h2 className="text-3xl text-white">Latest Laptops</h2>
          <div className="text-white text-center py-10">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-800 py-5 relative w-full text-left">
      <div className="container px-10">
        <div className="flex justify-between items-center mb-12 px-0">
          <h2 className="text-3xl text-white">Latest Laptops</h2>
        </div>
        <div className="relative flex items-center w-full">
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 z-10 bg-gray-700 hover:bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg -translate-y-1/2"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div
            className="overflow-hidden w-full"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div
              ref={sliderRef}
              className="flex w-full"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${current * (100 / slides.length)}%)`,
                transition: isTransitioning
                  ? "transform 1s ease-in-out"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((laptop, idx) => (
                <div
                  key={`${laptop._id || "slide"}-${idx}`}
                  className="flex-shrink-0 w-full flex items-start"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <div className="bg-gray-700 rounded-none shadow-md w-full mx-0 overflow-hidden border border-white p-4 flex flex-col max-w-full transition-all duration-500 text-left">
                    <div className="flex flex-col items-start mb-4">
                      <img
                        src={
                          laptop.images && laptop.images.length > 0
                            ? `http://localhost:5000${laptop.images[0].url}`
                            : "/default-laptop.png"
                        }
                        alt={
                          laptop.images && laptop.images.length > 0
                            ? laptop.images[0].alt
                            : laptop.fullName
                        }
                        className="object-cover h-24 w-24 mb-2"
                      />
                      <h3 className="text-2xl text-white font-bold">
                        <Link
                          to={`/laptops/${laptop.slug}`}
                          className="hover:underline"
                        >
                          {laptop.fullName}
                        </Link>
                      </h3>
                      <div className="text-white">
                        {laptop.manufacturerName}
                      </div>
                    </div>
                    <div className="text-white mb-2">
                      <span className="font-semibold">Rating:</span>{" "}
                      {typeof laptop.popularity === "number"
                        ? (laptop.popularity / 10).toFixed(1)
                        : "N/A"}
                      /10
                    </div>
                    <div className="text-white mb-2">
                      <span className="font-semibold">Launch Year:</span>{" "}
                      {laptop.releaseDate
                        ? new Date(laptop.releaseDate).getFullYear()
                        : "N/A"}
                    </div>
                    <div className="text-white mb-2">
                      <span className="font-semibold">Processor:</span>{" "}
                      {laptop.processor &&
                      typeof laptop.processor === "object" &&
                      laptop.processor.model
                        ? laptop.processor.model
                        : typeof laptop.processor === "string"
                        ? laptop.processor
                        : "N/A"}
                    </div>
                    <div className="text-white mb-2">
                      <span className="font-semibold">RAM:</span>{" "}
                      {laptop.memory?.size && laptop.memory?.type
                        ? `${laptop.memory.size}GB ${laptop.memory.type}`
                        : "N/A"}
                    </div>
                    <div className="text-white mb-2">
                      <span className="font-semibold">Storage:</span>{" "}
                      {Array.isArray(laptop.storage) &&
                      laptop.storage.length > 0
                        ? laptop.storage
                            .map((s) => `${s.capacity}GB ${s.type}`)
                            .join(", ")
                        : laptop.keyFeatures?.find(
                            (f) =>
                              typeof f === "string" &&
                              f.toLowerCase().includes("ssd")
                          ) || "N/A"}
                    </div>
                    <div className="mt-4">
                      <Link
                        to={`/laptops/${laptop.slug}`}
                        className="bg-blue-500 text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors inline-block"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 bg-gray-700 hover:bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg -translate-y-1/2"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestLaptops;