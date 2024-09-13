import React from "react";
import "./CountryCard.css";

const CountryCard = ({ flags }) => {
  console.log(flags);

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
