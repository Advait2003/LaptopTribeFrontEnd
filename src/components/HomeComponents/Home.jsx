import React from "react";
// import Navbar from "../NavbarComponents/Navbar";
import ManufacturersSection from "./ManufacCards";
// import Footer from "../FooterComponents/Footer";
import MidSection from "./MidSection";
const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      {/* <Navbar /> */}
      <section className="bg-grey-700 text-center py-5">
        <div className="container mx-auto px-4">
          {/* Subheadline */}
          <p className="text-4xl font-bold text-white  mb-4 px-10">
            Discover authentic feedback from laptop owners and make an
            informed decision before investing in your next device!
          </p>
        </div>
      </section>
      {/* <MidSection /> */}
      <ManufacturersSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
