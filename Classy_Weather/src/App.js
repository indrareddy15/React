import React from "react";
import "./App.css";
import WeatherApp from "./components/weather";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WeatherApp />
      </div>
    );
  }
}

export default App;
