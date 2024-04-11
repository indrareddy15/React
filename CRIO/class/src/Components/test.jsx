import React from "react";

class Cnter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <button>+</button>
        <span>{this.state.count}</span>
        <button>-</button>
      </div>
    );
  }
}

export default Cnter;
