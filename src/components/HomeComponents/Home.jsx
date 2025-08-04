import React from "react";
import LatestLaptops from "./LatestLaptops";
import LatestReviews from "./LatestReviews";
const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen ">
      {/* <Navbar /> */}
      <section className="bg-grey-700 text-left py-5">
        <div className="container ">
          {/* Subheadline */}
          <p className="text-4xl text-white mb-4 px-10 ">
            Discover authentic feedback from laptop owners and make an
            informed decision before investing in your next device!
          </p>
        </div>
      </section>
      <LatestLaptops/>
      <LatestReviews/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
