import React from 'react';
import Navbar from './NavbarComponents/Navbar';

const LaptopManufacturers = () => {
  return (
    <div className="bg-gray-100 min-h-screen"> {/* Apply background color */}
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-center">Welcome to the LaptopTribe</h1>
      </div>
    </div>
  );
};

export default LaptopManufacturers;
