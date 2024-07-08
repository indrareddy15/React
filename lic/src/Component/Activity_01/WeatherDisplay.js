import React from "react";

/**
 * WeatherDisplay component renders weather details.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.weather - Weather information.
 * @returns {JSX.Element} The rendered component.
 */
const WeatherDisplay = ({ weather }) => (
  <div>
    {weather ? (
      <div>
        <h3>{weather.city}</h3>
        <p>{weather.temperature}°C</p>
        <p>{weather.description}</p>
      </div>
    ) : (
      <p>No weather data available</p>
    )}
  </div>
);

export default WeatherDisplay;
