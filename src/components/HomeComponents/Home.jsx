import React from "react";
import ManufacturersSection from "./ManufacCards";
import LatestReviews from "./LatestReviews";
const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      {/* <Navbar /> */}
      <section className="bg-grey-700 text-center py-5">
        <div className="container mx-auto px-4">
          {/* Subheadline */}
          <p className="text-4xl text-white  mb-4 px-10">
            Discover authentic feedback from laptop owners and make an
            informed decision before investing in your next device!
          </p>
        </div>
      </section>
      <LatestReviews/>
      <ManufacturersSection />
    </div>
  );
};

export default Home;
