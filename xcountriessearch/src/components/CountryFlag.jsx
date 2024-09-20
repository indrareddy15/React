import React, { useEffect, useState } from "react";
import CardComp from "./Card/CardComp";

function CountryFlag() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchFlagData = () => {
    return fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in the Network" + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Api_Response", data[1]);
        setApiData(data);
      })
      .catch((err) => {
        console.error("Error in Fetching Data", +err);
      });
  };

  useEffect(() => {
    fetchFlagData();
  }, []);

  const filteredCountries = apiData.filter((countryName) =>
    countryName.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log("filteredCountries", filteredCountries);

  return (
    <div>
      <CardComp flag={filteredCountries} searchChange={handleSearchChange} />
    </div>
  );
}

export default CountryFlag;
