import React from "react";
import LatestLaptops from "./LatestLaptops";
import LatestReviews from "./LatestReviews";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* <Navbar /> */}
      <section className="flex justify-center items-center py-10">
        <div className="w-full max-w-3xl text-center mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Find Laptop Models. Check Specs. Compare and Upgrade.
          </h1>
          <p className="text-lg font-medium mb-2">
            We provide a complete laptop database with tools to compare models.
          </p>
          <Link
            to="/compare"
            className="mt-4 px-6 py-2 text-lg font-semibold rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors inline-block"
          >
            Compare Laptops
          </Link>
        </div>
      </section>

      <LatestLaptops />
      <LatestReviews />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
