// components/LatestReviews.js
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const MidSection = () => {
  const [reviews, setReviews] = useState([]);

  return (
    <section className="bg-gray-900 text-white py-4 text-left">
      <div className="container mx-4 px-2">
        <h2 className="text-3xl font-bold text-left mb-12">Latest Reviews</h2>
        <div className="space-y-8">
          {reviews.map(review => (
            <div key={review._id} className="bg-gray-800 rounded-lg p-6 mb-4">
            <h3 className="text-2xl font-semibold mb-2">{review.laptopModel}</h3>
            <p className="text-lg mb-2"><strong>Owner:</strong> {review.ownerName}</p>
            <p className="text-lg mb-2"><strong>Rating:</strong> {review.rating}/10</p>
            <p className="text-lg mb-2"><strong>Country of Origin:</strong> {review.countryOfOrigin}</p> {/* Added country of origin */}
            <p>{review.reviewText}</p>
            <p className="text-sm text-gray-400 mt-4">{new Date(review.date).toLocaleDateString()}</p>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default MidSection;
