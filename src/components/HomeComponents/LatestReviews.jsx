import React, { useState } from "react";

const LatestReviews = () => {
  // Dummy data for the latest reviews
  const reviews = [
    {
      laptopName: "Dell XPS 13",
      date: "2023-10-12",
      author: "John Doe",
      authorImage: "https://via.placeholder.com/40",
      specs: "Intel Core i7, 16GB RAM, 512GB SSD",
      rating: 9,
    },
    {
      laptopName: "HP Spectre x360",
      date: "2023-10-11",
      author: "Jane Smith",
      authorImage: "https://via.placeholder.com/40",
      specs: "Intel Core i5, 8GB RAM, 256GB SSD",
      rating: 8,
    },
    {
      laptopName: "Apple MacBook Air M2",
      date: "2023-10-10",
      author: "Alice Johnson",
      authorImage: "https://via.placeholder.com/40",
      specs: "Apple M2, 8GB RAM, 512GB SSD",
      rating: 9.5,
    },
    {
      laptopName: "Lenovo ThinkPad X1 Carbon",
      date: "2023-10-09",
      author: "Michael Brown",
      authorImage: "https://via.placeholder.com/40",
      specs: "Intel Core i7, 16GB RAM, 1TB SSD",
      rating: 8.8,
    },
    {
      laptopName: "Asus ROG Zephyrus G14",
      date: "2023-10-08",
      author: "David Lee",
      authorImage: "https://via.placeholder.com/40",
      specs: "AMD Ryzen 9, 16GB RAM, 1TB SSD",
      rating: 9.1,
    },
  ];

  // State for pagination
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < reviews.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const displayedReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-gray-600 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white text-left mb-4">Latest Reviews</h2>

        <div className="relative flex items-center">
          <div className="flex overflow-hidden space-x-4 p-4 w-full">
            {displayedReviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900 text-white rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 w-64 flex-shrink-0"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {review.laptopName}
                </h3>
                <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
                  <p>{review.date}</p>
                  <p>{review.author}</p>
                </div>
                <div className="flex items-center mb-2">
                  <img
                    src={review.authorImage}
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p className="text-gray-300 text-sm">{review.author}</p>
                </div>
                <p className="text-gray-400 mb-2">{review.specs}</p>
                <p className="font-bold text-yellow-400">
                  Rating: {review.rating}
                </p>
              </div>
            ))}
          </div>

          {/* Left Overlay Button */}
          <button
            onClick={handlePrevious}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={startIndex === 0}
          >
            Previous
          </button>

          {/* Right Overlay Button */}
          <button
            onClick={handleNext}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors ${
              startIndex + itemsPerPage >= reviews.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={startIndex + itemsPerPage >= reviews.length}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestReviews;



//   return (
//     <section className="bg-gray-800 p-8">
//       <h2 className="text-3xl font-bold text-white mb-6">Latest Reviews</h2>
//       <div className="flex overflow-x-auto">
//         {displayedReviews.map((review, index) => (
//           <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-6 mr-4">
//             <div className="flex items-center justify-between mb-4">
//               <p className="text-gray-400 text-sm">{review.date}</p>
//               <div className="flex items-center">
//                 <img
//                   src={review.authorImage}
//                   alt={`${review.author}'s avatar`}
//                   className="w-8 h-8 rounded-full mr-2"
//                 />
//                 <p className="text-gray-300 text-sm">{review.author}</p>
//               </div>
//             </div>

//             <h3 className="text-2xl font-semibold mb-2">{review.laptopName}</h3>
//             <div className="text-gray-400 text-sm mb-4">
//               <p>
//                 <strong>Processor:</strong> {review.specs.processor}
//               </p>
//               <p>
//                 <strong>RAM:</strong> {review.specs.RAM}
//               </p>
//               <p>
//                 <strong>Storage:</strong> {review.specs.storage}
//               </p>
//             </div>
//             <p className="text-yellow-400 font-bold">Rating: {review.rating}/10</p>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-4">
//         {startIndex > 0 && (
//           <button
//             onClick={handlePrevious}
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
//           >
//             Previous
//           </button>
//         )}
//         {startIndex + itemsPerPage < reviews.length && (
//           <button
//             onClick={handleNext}
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;

//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4;

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < reviews.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const handlePrevious = () => {
//     if (startIndex - itemsPerPage >= 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   const displayedReviews = reviews.slice(startIndex, startIndex + itemsPerPage);


//   /* <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 p-4 gap-5 ">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="snap-start bg-gray-900 text-white rounded-lg shadow-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-2xl font-semibold">{review.laptopName}</h3>
//                 <span className="text-yellow-400">
//                   Rating: {review.rating}/10
//                 </span>
//               </div>
//               <div className="text-gray-400 text-sm mb-4">
//                 <p>
//                   <strong>Processor:</strong> {review.specs.processor}
//                 </p>
//                 <p>
//                   <strong>RAM:</strong> {review.specs.RAM}
//                 </p>
//                 <p>
//                   <strong>Storage:</strong> {review.specs.storage}
//                 </p>
//               </div>
//               <div className="flex items-center justify-between mb-4">
//                 <p className="text-gray-400 text-sm">{review.date}</p>
//                 <div className="flex items-center">
//                   <img
//                     src={review.authorImage}
//                     alt={`${review.author}'s avatar`}
//                     className="w-8 h-8 rounded-full mr-2"
//                   />
//                   <p className="text-gray-300 text-sm">{review.author}</p>
//                 </div>
//               </div>

//               <div className="text-center">
//                 <button className="text-blue-500 underline">Read More</button>
//               </div>
//             </div>
//           ))}


//         </div> */
