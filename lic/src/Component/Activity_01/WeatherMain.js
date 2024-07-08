import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import "./App.css";

/**
 * App component that manages the state and logic of the weather forecast application.
 *
 * @component
 */
const WeatherMain = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  /**
   * Fetches weather data for a given city.
   *
   * @param {string} city - The name of the city.
   */
  const fetchWeather = async (city) => {
    // Dummy data for demonstration
    setWeather({
      city,
      temperature: 25,
      description: "Sunny",
    });
    setForecast([
      { date: "2024-07-01", temperature: 25, description: "Sunny" },
      { date: "2024-07-02", temperature: 22, description: "Partly Cloudy" },
      { date: "2024-07-03", temperature: 24, description: "Sunny" },
      { date: "2024-07-04", temperature: 20, description: "Rainy" },
      { date: "2024-07-05", temperature: 23, description: "Cloudy" },
    ]);
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default WeatherMain;
