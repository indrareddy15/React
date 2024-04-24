import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError("Error fetching weather data");
    }
  };

  useEffect(() => {
    fetchWeatherData("New York"); // Default location
  }, []);

  const handleSearch = (location) => {
    fetchWeatherData(location);
  };

  return (
    <div className="weather-app">
      <header className="app-header">
        <h1>Weather App</h1>
      </header>
      <div className="search-box">
        <SearchBox onSearch={handleSearch} />
      </div>
      <div className="weather-details">
        {error && <p className="error-message">{error}</p>}
        {weatherData && (
          <div className="weather-card">
            <h2>
              {weatherData.location.name}, {weatherData.location.country}
            </h2>
            <div className="weather-info">
              <div>
                <img
                  src={weatherData.current.condition.icon}
                  alt="Weather Icon"
                />
                <p>{weatherData.current.condition.text}</p>
              </div>
              <div>
                <p>
                  Temperature: {weatherData.current.temp_c}°C /{" "}
                  {weatherData.current.temp_f}°F
                </p>
                <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
                <p>Humidity: {weatherData.current.humidity}%</p>
                <p>Cloud Coverage: {weatherData.current.cloud}%</p>
                <p>Last Updated: {weatherData.current.last_updated}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
