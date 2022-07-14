import axios from "axios";
import React from "react";
import { useState } from "react";

const CarForms = ({ getCars }) => {
  const [brand ,setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Hice submit");
    const cars = {
      brand: brand,
      model: model,
      color: color,
      year: year,
      price: price,
    };
    axios
      .post("https://cars-crud.herokuapp.com/cars/", cars)
      .then(() => getCars())
      .catch((error) => console.log(error.response));
  };

  return (
    <form onSubmit={submit}>
      <h1>Cars Form</h1>

      <div className="input-container">
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default CarForms;