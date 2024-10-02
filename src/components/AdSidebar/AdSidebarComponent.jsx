// AdSidebar.jsx
import React from 'react';

const AdSidebar = () => {
  return (
    <div className="w-64 bg-gray-200 p-4 rounded-lg shadow-md h-full">
      <h2 className="text-lg font-bold mb-4">Sponsored Ads</h2>
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/250x150"
          alt="Ad 1"
          className="w-full rounded-md mb-2"
        />
        <p className="text-sm">Buy the latest laptop model now!</p>
      </div>
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/250x150"
          alt="Ad 2"
          className="w-full rounded-md mb-2"
        />
        <p className="text-sm">50% off on selected laptops!</p>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/250x150"
          alt="Ad 3"
          className="w-full rounded-md mb-2"
        />
        <p className="text-sm">Check out the new arrivals!</p>
      </div>
    </div>
  );
};

export default AdSidebar;
