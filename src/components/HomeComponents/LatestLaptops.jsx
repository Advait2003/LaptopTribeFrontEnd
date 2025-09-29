import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LaptopCard from "../LaptopCards/LaptopCard";

const dummyLaptops = [
  {
    _id: "dummy1",
    fullName: "Dummy Laptop 1",
    model: "DL-100",
    manufacturerName: "DummyBrand",
    display: { size: 15.6, technology: "IPS", refreshRate: 60, brightness: 300 },
    processor: { model: "Dummy CPU", cores: 4, threads: 8, baseSpeed: 2.0, maxSpeed: 3.5 },
    graphics: { integrated: { model: "Dummy GPU" } },
    dimensions: { weight: 1.5 },
    affiliatedLink: "#",
    reviewScore: 8.2,
    images: [{ url: "/default-laptop.png", alt: "Dummy Laptop 1" }],
    slug: "dummy-laptop-1",
    thirdPartyReviews: ["https://youtube.com/dummyreview1"]
  },
  {
    _id: "dummy2",
    fullName: "Dummy Laptop 2",
    model: "DL-200",
    manufacturerName: "DummyBrand",
    display: { size: 14, technology: "OLED", refreshRate: 120, brightness: 400 },
    processor: { model: "Dummy CPU 2", cores: 6, threads: 12, baseSpeed: 2.5, maxSpeed: 4.0 },
    graphics: { dedicated: { model: "Dummy GPU 2" } },
    dimensions: { weight: 1.2 },
    affiliatedLink: "#",
    reviewScore: 9.0,
    images: [{ url: "/default-laptop.png", alt: "Dummy Laptop 2" }],
    slug: "dummy-laptop-2",
    thirdPartyReviews: ["https://youtube.com/dummyreview2"]
  },
  {
    _id: "dummy3",
    fullName: "Dummy Laptop 3",
    model: "DL-300",
    manufacturerName: "DummyBrand",
    display: { size: 13.3, technology: "TN", refreshRate: 60, brightness: 250 },
    processor: { model: "Dummy CPU 3", cores: 2, threads: 4, baseSpeed: 1.8, maxSpeed: 2.8 },
    graphics: { integrated: { model: "Dummy GPU 3" } },
    dimensions: { weight: 1.1 },
    affiliatedLink: "#",
    reviewScore: 7.5,
    images: [{ url: "/default-laptop.png", alt: "Dummy Laptop 3" }],
    slug: "dummy-laptop-3",
    thirdPartyReviews: []
  },
  {
    _id: "dummy4",
    fullName: "Dummy Laptop 4",
    model: "DL-400",
    manufacturerName: "DummyBrand",
    display: { size: 17, technology: "IPS", refreshRate: 144, brightness: 350 },
    processor: { model: "Dummy CPU 4", cores: 8, threads: 16, baseSpeed: 3.0, maxSpeed: 4.5 },
    graphics: { dedicated: { model: "Dummy GPU 4" } },
    dimensions: { weight: 2.2 },
    affiliatedLink: "#",
    reviewScore: 8.8,
    images: [{ url: "/default-laptop.png", alt: "Dummy Laptop 4" }],
    slug: "dummy-laptop-4",
    thirdPartyReviews: ["https://youtube.com/dummyreview4"]
  }
];

const LatestLaptops = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/laptops/");
        setLaptops(res.data);
      } catch (err) {
        setLaptops([]);
      }
    };
    fetchLaptops();
  }, []);

  // Use dummy cards if no laptops loaded
  const displayLaptops =
    laptops.length > 0 ? laptops.slice(0, 4) : dummyLaptops;

  return (
    <section className="py-5 relative w-full text-left">
      <div className="container px-10">
        <div className="flex justify-between items-center mb-12 px-0">
          <h2 className="text-3xl">Latest Laptops</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayLaptops.map((laptop, idx) => (
            <LaptopCard key={laptop._id || idx} laptop={laptop} />
          ))}
        </div>
        <div className="mt-8 text-left">
          <Link
            to="/laptops"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Show all laptops &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestLaptops;