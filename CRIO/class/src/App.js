import React from "react";
import "./App.css";
import SessionOne from "./Components/Session1";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <SessionOne />
      </div>
    );
  }
}

export default App;
