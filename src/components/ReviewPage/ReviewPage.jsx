import React, { useState } from "react";

const LaptopForm = () => {
  const [laptop, setLaptop] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    processor: "",
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Brand:</label>
        <input type="text" name="brand" value={laptop.brand} onChange={handleChange} />
      </div>
      <div>
        <label>Model:</label>
        <input type="text" name="model" value={laptop.model} onChange={handleChange} />
      </div>
      <div>
        <label>RAM:</label>
        <input type="text" name="ram" value={laptop.ram} onChange={handleChange} />
      </div>
      <div>
        <label>Storage:</label>
        <input type="text" name="storage" value={laptop.storage} onChange={handleChange} />
      </div>
      <div>
        <label>Processor:</label>
        <input type="text" name="processor" value={laptop.processor} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LaptopForm;
