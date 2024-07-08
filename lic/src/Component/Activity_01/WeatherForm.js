import React, { useState } from "react";

/**
 * WeatherForm component provides a form to enter a city name.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.onSearch - Function to search weather for the entered city.
 * @returns {JSX.Element} The rendered component.
 */
const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  /**
   * Handles form submission to search for weather information.
   *
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default WeatherForm;
