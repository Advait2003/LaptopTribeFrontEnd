import React from "react";
import wideSelectLogo from "../../assets/SVGs/laptop-alt-2-svgrepo-com.svg";
import UnbiasedReviews from "../../assets/SVGs/review-screen-svgrepo-com.svg"
const Whyus = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Section Title on the Left */}
        <div className="md:w-1/3 mb-12 md:mb-0 text-left">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why LaptopTribe?
          </h2>
        </div>

        {/* Benefits on the Right */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Benefit 1: Unbiased Reviews */}
          <div className="flex items-start space-x-4">
            <div
              className="bg-blue-600 text-white rounded-full p-4 flex justify-center items-center"
              style={{ width: "90px", height: "64px" }}
            >
              <img
                src={UnbiasedReviews}
                alt="LaptopTribeLogo"
                className="h-12 w-12"
              />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-semibold text-white">
                Unbiased Reviews
              </h3>
              <p className="text-gray-300">
                All feedback comes directly from laptop owners who share their
                real experiences after using the devices over time.
              </p>
            </div>
          </div>

          {/* Benefit 2: Ratings Out of 10 */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 text-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-white">
                Ratings Out of 10
              </h3>
              <p className="text-gray-300">
                A simple, intuitive score to easily compare laptops based on
                real usage, helping you quickly assess which device fits your
                needs.
              </p>
            </div>
          </div>

          {/* Benefit 3: Wide Selection */}
          <div className="flex items-start space-x-4">
            <div
              className="bg-blue-600 text-white rounded-full p-4 flex justify-center items-center"
              style={{ width: "90px", height: "64px" }}
            >
              <img
                src={wideSelectLogo}
                alt="LaptopTribeLogo"
                className="h-12 w-12"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-white">
                Wide Selection
              </h3>
              <p className="text-gray-300">
                Browse laptops from a wide range of brands and models tailored
                to different user needs and budgets.
              </p>
            </div>
          </div>

          {/* Benefit 4: User-Friendly Interface */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 text-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m-7-8h8m3 9h.01M6 16h.01"
                />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-white">
                User-Friendly Interface
              </h3>
              <p className="text-gray-300">
                Our platform is designed to provide a seamless experience when
                researching laptops and sharing your reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
