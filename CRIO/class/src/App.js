import React from "react";
import "./App.css";
// import LifeCycle from "./Components/Session4";
import FCmpnt from "./Components/FCone";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showcomponent: true,
    };
  }

  render() {
    return (
      <div className="App">
        {/* <button

          onClick={() =>
            this.setState((prev) => ({ showcomponent: !prev.showcomponent }))
          }
        >
          Show/Hide LifeCyccle
        </button>
       {this.state.showcomponent ? <LifeCycle /> : null} */}
        <FCmpnt diff={1} />
        <FCmpnt diff={10} />
      </div>
    );
  }
}

export default App;
