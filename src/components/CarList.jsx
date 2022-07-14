import React from "react";

const CarsList = ({ cars }) => {
  return (
    <ul>
      <h1>CarsList</h1>
      {cars.map((car) => (
        <li key={car.id}>
          <h3>{car.brand}</h3>
          <div>
            <b>Model: </b> {car.model}
          </div>
          <div>
            <b>Color: </b> {car.color}
          </div>
          <div>
            <b>Year: </b> {car.year}
          </div>
          <div>
            <b>Price: </b> {car.price}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;