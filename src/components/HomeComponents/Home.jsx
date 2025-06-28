import React from "react";
<<<<<<< HEAD
import LatestLaptops from "./LatestLaptops";
import LatestReviews from "./LatestReviews";
// import Footer from "../FooterComponents/Footer";
const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen ">
      {/* <Navbar /> */}
      <section className="bg-grey-700 text-left py-5">
        <div className="container mx-auto px-4 ">
          {/* Subheadline */}
          <p className="text-4xl text-white mb-4 px-10 ">
=======
import ManufacturersSection from "./ManufacSection";
import LatestReviews from "./LatestReviews";
const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen rounded-lg">
      {/* <Navbar /> */}
      <section className="bg-grey-700 text-center py-5">
        <div className="container mx-auto px-4 ">
          {/* Subheadline */}
          <p className="text-4xl text-white  mb-4 px-10 ">
>>>>>>> 94b0eceb4fdc6bfe5544ae39784cea28a3c60c69
            Discover authentic feedback from laptop owners and make an
            informed decision before investing in your next device!
          </p>
        </div>
      </section>
<<<<<<< HEAD
      <LatestLaptops/>
      <LatestReviews/>
      {/* <Footer/> */}
=======
      <ManufacturersSection />
      <LatestReviews/>
>>>>>>> 94b0eceb4fdc6bfe5544ae39784cea28a3c60c69
    </div>
  );
};

export default Home;
