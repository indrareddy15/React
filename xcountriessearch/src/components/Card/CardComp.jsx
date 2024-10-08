import React from "react";
import "./Card.css";

function CardComp({ searchChange, flagData, searchTerm, searchflag }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search for Countries"
        className="search-field"
        onChange={searchChange}
      />
      <div className="card-container">
        {(searchTerm === " " ? flagData : searchflag).map((item, idx) => (
          <div className="countryCard ">
            <img
              key={idx}
              className="flag-image"
              src={item.flags.png}
              alt={item.flags.alt}
            />
            <p className="flag-name">{item.name.common}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardComp;
