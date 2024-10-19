import React, { useEffect, useState } from "react";


const XStates = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]); 
  const [cities, setCities] = useState([]); 
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://crio-location-selector.onrender.com/countries"
      );
      const countryData = await response.json();
      setCountries(countryData);
    } catch (err) {
      console.error("Error fetching countries:", err);
    }
  };

  const fetchStates = async () => {
    if (!selectedCountry) return;
    try {
      const response = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
      );
      const stateData = await response.json();
      setStates(stateData);
    } catch (err) {
      console.error("Error fetching states:", err);
    }
  };

  const fetchCities = async () => {
    if (!selectedState) return;
    try {
      const response = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
      );
      const cityData = await response.json();
      setCities(cityData);
    } catch (err) {
      console.error("Error fetching cities:", err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    fetchCities();
  }, [selectedState]);

  return (
    <div className="location-selector">
      <h1>Select Location</h1>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country, idx) => (
          <option value={country} key={idx}>
            {country}
          </option>
        ))}
      </select>

      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        disabled={!selectedCountry}
      >
        <option value="">Select State</option>
        {states.map((state, id) => (
          <option value={state} key={id}>
            {state}
          </option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        disabled={!selectedState}
      >
        <option value="">Select City</option>
        {cities.map((city, id) => (
          <option value={city} key={id}>
            {city}
          </option>
        ))}
      </select>

      {selectedCity && (
        <p>
          You selected <strong>{selectedCity}</strong>, {selectedState},{" "}
          {selectedCountry}
        </p>
      )}
    </div>
  );
};

export default XStates;
