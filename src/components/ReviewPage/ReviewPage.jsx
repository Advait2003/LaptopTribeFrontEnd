import React, { useState } from "react";

const LaptopForm = () => {
  const [laptop, setLaptop] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    processor: "",
    yearOfPurchase: "",
    countryOfPurchase:"",
    approxPrice: ""
  });

  const handleChange = (e) => {
    setLaptop({ ...laptop, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to the backend
    try {
      const response = await fetch("http://localhost:5000/api/laptops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(laptop),
      });
      const data = await response.json();
      console.log(data); // handle success
    } catch (err) {
      console.error(err); // handle error
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-2"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Tell Us about your Laptop!
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="brand"
            >
              Brand:
            </label>
            <input
              type="text"
              name="brand"
              value={laptop.brand}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter laptop brand"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="model"
            >
              Model:
            </label>
            <input
              type="text"
              name="model"
              value={laptop.model}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter laptop model"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ram"
            >
              RAM:
            </label>
            <input
              type="text"
              name="ram"
              value={laptop.ram}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter RAM size"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="storage"
            >
              Storage:
            </label>
            <input
              type="text"
              name="storage"
              value={laptop.storage}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter storage size"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="processor"
            >
              Processor:
            </label>
            <input
              type="text"
              name="processor"
              value={laptop.processor}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter processor type"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="storage"
            >
              Year of purchase:
            </label>
            <input
              type="text"
              name="storage"
              value={laptop.yearOfPurchase}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Year of Purchase"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ram"
            >
              Country Of Purchase
            </label>
            <input
              type="text"
              name="yearOfPurchase"
              value={laptop.yearOfPurchase}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Year of Purchase"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="yearOfPurchase"
            >
              Approximate price of your Laptop
            </label>
            <input
              type="text"
              name="ram"
              value={laptop.approxPrice}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Year of Purchase"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LaptopForm;
