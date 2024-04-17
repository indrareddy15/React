import React from "react";
import "./App.css";
// import DogPics from "./Components/DogPics/dogPics";
// import FCmpnt1 from "./Components/Session5";
import Album from "./Components/ExTest/Album";
// import LifeCycle from "./Components/Session4";
// import FCmpnt from "./Components/FCone";

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
        {/* <FCmpnt diff={1} />
        <FCmpnt diff={10} /> */}
        {/* <DogPics /> */}
        {/* <FCmpnt1 /> */}
        <Album />
      </div>
    );
  }
}

export default App;
