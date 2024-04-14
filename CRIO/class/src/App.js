import React from "react";
import "./App.css";
import UserDashBoard from "./Components/UserDashBoard/UserDashBoard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserDashBoard />
      </div>
    );
  }
}

export default App;
