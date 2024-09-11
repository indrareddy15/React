import React, { useEffect, useState } from "react";
import CountryCard from "./Card/CountryCard";

const CountryFlag = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCountryFlags = async () => {
    try {
      const response = await fetch(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      setError(error.message || "Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountryFlags();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <CountryCard flags={data} />
    </div>
  );
};

export default CountryFlag;
