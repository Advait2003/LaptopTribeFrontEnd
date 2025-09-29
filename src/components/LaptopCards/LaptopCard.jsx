import React from "react";
import { Link } from "react-router-dom";

// ✅ Helper: Format processor info dynamically
const formatProcessor = (processor) => {
  if (!processor || typeof processor !== "object") return processor || "N/A";

  const parts = [
    processor.cores ? `${processor.cores}C` : null,
    processor.threads ? `${processor.threads}T` : null,
    processor.baseSpeed || processor.maxSpeed
      ? `${processor.baseSpeed ?? ""}${processor.maxSpeed ? `-${processor.maxSpeed}` : ""}GHz`
      : null,
  ].filter(Boolean);

  return `${processor.model}${parts.length ? ` (${parts.join(", ")})` : ""}`;
};

// ✅ Helper: Format display info dynamically
const formatDisplay = (display) => {
  if (!display || typeof display !== "object") return "N/A";

  const parts = [
    display.size ? `${display.size}"` : null,
    display.technology || null,
    display.refreshRate ? `${display.refreshRate}Hz` : null,
    display.brightness ? `${display.brightness}nits` : null,
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "N/A";
};

// ✅ Helper: Format GPU details
const formatGPU = (graphics) => {
  if (!graphics) return "N/A";
  const gpu = graphics.dedicated || graphics.integrated || null;
  return gpu ? gpu.model || gpu.brand || "N/A" : "N/A";
};

// ✅ Helper: Calculate performance metric
const getPerformanceMetric = (processor) => {
  if (!processor || typeof processor !== "object") return "N/A";

  const metric =
    (processor.cores || 0) * 2 +
    (processor.threads || 0) +
    (processor.baseSpeed || 0) * 10 +
    (processor.maxSpeed || 0) * 10;

  return metric.toFixed(1);
};

const LaptopCard = ({ laptop }) => {
  const performanceMetric = getPerformanceMetric(laptop.processor);
  const gpu = formatGPU(laptop.graphics);
  const thirdPartyLinks =
    Array.isArray(laptop.thirdPartyReviews) && laptop.thirdPartyReviews.length > 0
      ? laptop.thirdPartyReviews
      : [];

  return (
    <div className="rounded-lg shadow-md w-full mx-0 overflow-hidden border border-black p-4 flex flex-col max-w-full transition-all duration-300 text-left bg-white hover:bg-blue-50 hover:shadow-lg hover:border-blue-600 focus:bg-blue-100">
      
      {/* Image & Title */}
      <div className="flex flex-col items-start mb-4">
        <img
          src={
            laptop.images?.length > 0
              ? `http://localhost:5000${laptop.images[0].url}`
              : "/default-laptop.png"
          }
          alt={laptop.images?.[0]?.alt || laptop.fullName}
          className="object-cover h-24 w-24 mb-2 rounded"
        />
        <h3 className="text-2xl font-bold text-gray-900">
          {laptop.fullName}
        </h3>
        {laptop.model && (
          <div className="text-sm text-gray-500 mb-1">Model: {laptop.model}</div>
        )}
        {laptop.manufacturerName && (
          <div className="text-sm text-gray-500 mb-1">Manufacturer: {laptop.manufacturerName}</div>
        )}
      </div>

      {/* Display */}
      <div className="mb-2 text-gray-800">
        <span className="font-semibold">Screen:</span>{" "}
        {formatDisplay(laptop.display)}
      </div>

      {/* CPU */}
      <div className="mb-2 text-gray-800">
        <span className="font-semibold">CPU:</span>{" "}
        {formatProcessor(laptop.processor)}
        {performanceMetric !== "N/A" && (
          <span className="ml-2 text-xs text-blue-500">
            Perf: {performanceMetric}
          </span>
        )}
      </div>

      {/* GPU */}
      <div className="mb-2 text-gray-800">
        <span className="font-semibold">GPU:</span> {gpu}
      </div>

      {/* Weight */}
      {laptop.dimensions?.weight && (
        <div className="mb-2 text-gray-800">
          <span className="font-semibold">Weight:</span>{" "}
          {laptop.dimensions.weight} kg
        </div>
      )}

      {/* Affiliated Link */}
      {laptop.affiliatedLink && (
        <div className="mb-2 text-gray-800">
          <span className="font-semibold">Affiliated Link:</span>{" "}
          <a
            href={laptop.affiliatedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
            onClick={(e) => e.stopPropagation()}
          >
            Buy Now
          </a>
        </div>
      )}

      {/* Review Score */}
      {typeof laptop.reviewScore === "number" && (
        <div className="mb-2 text-gray-800">
          <span className="font-semibold">Review Score:</span>{" "}
          {laptop.reviewScore.toFixed(1)}/10
        </div>
      )}

      {/* 3rd Party Reviews */}
      {thirdPartyLinks.length > 0 && (
        <div className="mb-2 text-gray-800">
          <span className="font-semibold">3rd Party Reviews:</span>{" "}
          {thirdPartyLinks.map((link, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mr-2"
              onClick={(e) => e.stopPropagation()}
            >
              {link.includes("youtube") ? "YouTube" : "Review"}
            </a>
          ))}
        </div>
      )}

      {/* View Details Button */}
      <div className="mt-4">
        <Link
          to={`/laptops/${laptop.slug}`}
          className="text-lg font-medium py-2 px-4 rounded-md bg-blue-500 text-white inline-block hover:bg-blue-600 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default LaptopCard;
