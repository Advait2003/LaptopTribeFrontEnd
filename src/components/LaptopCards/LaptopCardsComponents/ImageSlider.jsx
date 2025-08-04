// src/components/LaptopCard/ImageSlider.jsx
import React, { useState } from 'react';

const ImageSlider = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  if (!images || images.length === 0) {
    return <div className="aspect-video bg-gray-700 rounded-t-lg flex items-center justify-center text-gray-400">No Image Available</div>;
  }

  return (
    <div className="relative h-64 w-full group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-t-lg bg-center bg-contain bg-no-repeat duration-500"
      ></div>
      {/* Left Arrow */}
      <div onClick={goToPrevious} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        &#10094;
      </div>
      {/* Right Arrow */}
      <div onClick={goToNext} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        &#10095;
      </div>
    </div>
  );
};

export default ImageSlider;