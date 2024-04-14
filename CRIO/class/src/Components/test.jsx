import React from "react";

class Cnter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncreament = () => {
    console.log("Increased", this.state.count);
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  handleDecreament = () => {
    console.log("Decreament", this.state.count);
    this.setState((prev) => ({ count: prev.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>Counter Application</h1>
        <button onClick={this.handleIncreament}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleDecreament}>-</button>
      </div>
    );
  }
}

export default Cnter;
