import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // Every Normal fun in javascript have "this" of its own keyword
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    console.log("Increament");
  }

  handleDecrement() {
    console.log("Decrement");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
