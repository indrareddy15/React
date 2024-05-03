import * as React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./weatherApp.css";
import { API_KEY } from "./base";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [found, setFound] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [report, setReport] = useState({
    place: "",
    country: "",
    temperature: { c: "", f: "" },
    weather: "",
    image: "",
    humidity: "",
    windSpeed: "",
    humidCoverage: "",
    lastUpdated: "",
  });

  async function getApiCall(place) {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}=${place}&aqi=no`
      );
      const data = response.data;
      console.log(data);
      if (data) {
        setFound(true);
        setErrorMsg(false);
        setReport({
          place: data.location.name,
          country: data.location.country,
          temperature: { c: data.current.temp_c, f: data.current.temp_f },
          weather: data.current.condition.text,
          image: data.current.condition.icon,
          humidity: data.current.humidity,
          windSpeed: data.current.wind_kph,
          humidCoverage: data.current.cloud,
          lastUpdated: data.current.last_updated,
        });
      }
    } catch (e) {
      setErrorMsg(true);
    }
  }

  const Display = [
    {
      label: "Temperature",
      value: found
        ? `${report.temperature.c} °C / ${report.temperature.f} °F`
        : "",
    },
    { label: "Weather", value: found ? report.weather : "" },
    { label: "Humidity", value: found ? `${report.humidity}%` : "" },
    { label: "Wind Speed", value: found ? `${report.windSpeed} km/h` : "" },
    { label: "Cloud Coverage", value: found ? `${report.humidCoverage}%` : "" },
    { label: "Last Updated", value: found ? report.lastUpdated : "" },
  ];

  return (
    <div className="container">
      <div className="navbar">
        <h1>Weather App</h1>
      </div>
      <div className="content">
        <TextField
          id="outlined-basic"
          label="Enter Location"
          variant="outlined"
          className="search-box"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") getApiCall(location);
          }}
        />
        {errorMsg ? (
          <h2 className="red">No matching location found.</h2>
        ) : found ? (
          <h2>
            {report.place}, {report.country}
          </h2>
        ) : (
          <h2>Enter the location</h2>
        )}

        {found ? (
          <Card className="weather-card">
            <CardContent>
              <CardMedia
                className="weather-icon"
                image={report.image}
                title="Weather Icon"
              />
              <Grid container spacing={2}>
                {Display.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    key={index}
                    className="weather-info"
                  >
                    <Typography className="label">{item.label}:</Typography>
                    <Typography className="value">{item.value}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  );
};

export default WeatherApp;
