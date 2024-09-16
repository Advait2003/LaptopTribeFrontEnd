import React from 'react';
import Navbar from '../NavbarComponents/Navbar';
import ManufacturersSection from './ManufacCards';
import Footer from "../FooterComponents/Footer";
import WhyUs from './WhyUs';
const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen"> {/* Apply background color */}
      <Navbar />
      
      <section className="bg-grey-700 dark:bg-gray-800 text-center py-20">
      <div className="container mx-auto px-4">
        {/* Main Headline */}
        <h1 className="text-6xl font-bold text-white dark:text-white mb-4">
          Get Honest Reviews Before You Buy Your Next Laptop!
        </h1>

        {/* Subheadline */}
        <p className="text-2xl text-white dark:text-gray-300 mb-8">
          Discover authentic feedback from actual laptop owners and make an informed decision before investing in your next device.
        </p>

      </div>
    </section>
    <WhyUs/>
    <ManufacturersSection/>
    
    <Footer/>
    </div>
  );
};

export default Home;
