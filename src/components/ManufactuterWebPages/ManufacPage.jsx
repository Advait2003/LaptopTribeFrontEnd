// import React from 'react'
// import Navbar from '../NavbarComponents/Navbar'
// import Footer from '../FooterComponents/Footer'

// const ManufacturerPage = ({ manufacturer, laptops }) => {
//     return (
//       <>
//         {/* Navbar */}
//         <Navbar />
  
//         <div className="container mx-auto px-4 py-8">
//           {/* Manufacturer Name */}
//           <h1 className="text-4xl font-bold text-white mb-8">{manufacturer}</h1>
  
//           {/* Laptop Cards */}
//           <div className="space-y-8">
//             {laptops.map((laptop) => (
//               <div
//                 key={laptop.id}
//                 className="bg-gray-800 rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden"
//               >
//                 {/* Laptop Image */}
//                 <div className="md:w-1/3 w-full p-4 flex justify-center items-center bg-gray-900">
//                   <img
//                     src={laptop.imageUrl}
//                     alt={laptop.name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
  
//                 {/* Laptop Details */}
//                 <div className="md:w-2/3 w-full p-6">
//                   <h2 className="text-3xl font-semibold text-white mb-2">
//                     {laptop.name}
//                   </h2>
//                   <p className="text-gray-300 mb-2">
//                     <strong>Launch Date:</strong> {laptop.launchDate}
//                   </p>
//                   <p className="text-gray-300 mb-4">
//                     <strong>Specs:</strong> {laptop.specs}
//                   </p>
  
//                   {/* Ratings */}
//                   <div className="flex items-center space-x-4">
//                     <p className="text-gray-300">
//                       <strong>Rating:</strong> {laptop.rating}/10
//                     </p>
//                     <p className="text-gray-300">
//                       <strong>Reviews:</strong> {laptop.numberOfReviews} reviews
//                     </p>
//                     <p className="text-gray-300">
//                       <strong>Average Rating:</strong> {laptop.averageRating}/10
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   };
  
//   export default ManufacturerPage;


import React from "react";
import { useParams } from "react-router-dom";

const ManufacturerPage = () => {
  const { name } = useParams();

  // Sample data for laptops - you would likely fetch this from an API
  const laptops = [
    {
      id: 1,
      name: "Dell XPS 13",
      launchDate: "2021-03-15",
      specs: "Intel Core i7, 16GB RAM, 512GB SSD",
      rating: 9,
      numberOfReviews: 150,
      averageRating: 8.5,
      imageUrl: "https://example.com/dell-xps-13.jpg",
    },
    {
      id: 2,
      name: "Dell Inspiron 15",
      launchDate: "2022-01-22",
      specs: "Intel Core i5, 8GB RAM, 256GB SSD",
      rating: 7.5,
      numberOfReviews: 100,
      averageRating: 7.3,
      imageUrl: "https://example.com/dell-inspiron-15.jpg",
    },
    // Add more laptops here...
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-white mb-8">
        {name} Laptops
      </h1>
      <div className="space-y-8">
        {laptops.map((laptop) => (
          <div
            key={laptop.id}
            className="bg-gray-800 rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden"
          >
            {/* Laptop Image */}
            <div className="md:w-1/3 w-full p-4 flex justify-center items-center bg-gray-900">
              <img
                src={laptop.imageUrl}
                alt={laptop.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Laptop Details */}
            <div className="md:w-2/3 w-full p-6">
              <h2 className="text-3xl font-semibold text-white mb-2">
                {laptop.name}
              </h2>
              <p className="text-gray-300 mb-2">
                <strong>Launch Date:</strong> {laptop.launchDate}
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Specs:</strong> {laptop.specs}
              </p>

              {/* Ratings */}
              <div className="flex items-center space-x-4">
                <p className="text-gray-300">
                  <strong>Rating:</strong> {laptop.rating}/10
                </p>
                <p className="text-gray-300">
                  <strong>Reviews:</strong> {laptop.numberOfReviews} reviews
                </p>
                <p className="text-gray-300">
                  <strong>Average Rating:</strong> {laptop.averageRating}/10
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturerPage;
