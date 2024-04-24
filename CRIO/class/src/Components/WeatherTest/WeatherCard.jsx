// WeatherCard.js
import React from "react";

const WeatherCard = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <div className="weather-card">
      <h2>
        {location.name}, {location.country}
      </h2>
      <p>
        Temperature: {current.temp_c}°C / {current.temp_f}°F
      </p>
      <p>Weather: {current.condition.text}</p>
      <p>Wind Speed: {current.wind_kph} km/h</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Cloud Coverage: {current.cloud}%</p>
      <p>Last Updated: {current.last_updated}</p>
      <img src={current.condition.icon} alt={current.condition.text} />
    </div>
  );
};

export default WeatherCard;
