# Weather Forecast Application

## Overview

The Weather Forecast Application is a simple and interactive web app that allows users to view current weather conditions and a 5-day weather forecast for a specified city. This application fetches weather data from an external API and displays it in an easy-to-read format.

## Features

- **Current Weather Display**: View the current temperature, humidity, and weather conditions for a specified city.
- **5-Day Forecast**: See the weather forecast for the next five days, including temperature and weather conditions.
- **User-Friendly Interface**: Simple and intuitive UI for a seamless user experience.
- **Real-Time Data**: Fetches and displays real-time weather data from an external API.
- **Form Validation**: Ensures users input a valid city name before fetching data.

## Functionality

### Components

#### `WeatherForm.js`
- **Purpose**: Renders a form for users to input the city name and fetch weather data.
- **Props**: 
  - `onSubmit`: Function to handle form submission.
- **Description**: 
  - Includes an input field for the city name and a submit button. When the form is submitted, it triggers the `onSubmit` function provided via props.

#### `WeatherDisplay.js`
- **Purpose**: Displays the current weather data for the specified city.
- **Props**:
  - `weatherData`: Object containing current weather information.
- **Description**: 
  - Shows the current temperature, humidity, and weather conditions.

#### `Forecast.js`
- **Purpose**: Displays a 5-day weather forecast for the specified city.
- **Props**:
  - `forecastData`: Array containing weather forecast information for the next five days.
- **Description**: 
  - Renders a list of weather forecast data including date, temperature, and weather conditions for each day.

### Main Component

#### `App.js`
- **Purpose**: Manages the state and logic of the weather forecast application.
- **State**:
  - `city`: Stores the name of the city.
  - `currentWeather`: Stores the current weather data.
  - `forecast`: Stores the 5-day weather forecast data.
- **Functions**:
  - `fetchWeatherData`: Fetches weather data from the external API and updates the state.
- **Description**:
  - Renders the main layout including the `WeatherForm`, `WeatherDisplay`, and `Forecast` components. Handles the logic for fetching and displaying weather data.

### Styling

#### `App.css`
- **Purpose**: Provides basic styling for the application.
- **Description**: 
  - Includes styles for the main container and buttons.
