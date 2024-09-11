import React, { useState } from "react";
import "./CountryCard.css";

const CountryCard = ({ flags }) => {
  console.log(flags);
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="card-container">
      {flags.map((item) => (
        <div key={item} className="card">
          <img src={item.flag} alt={item.name} className="flag-image" />
          <div className="flag-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
