import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // Every Normal fun in javascript have "this" of its own keyword whose (this) => value is null(undefined) by defaulet (except arrow function)
    // arrow functions doesn't conatain "this" key word of it's own
    // based on call, apply , bid , object the value of this changes

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

    //bind is method which helps to change the value of by using calls "this"
  }
  handleIncrement() {
    console.log("Increament", this.state.count);
    // callback is funfction that pass to another function arugument
    // in the below case the count is depends on the prev state that is why we using call back
    // setState is function that updated state in class based component
    // for setState you specifically mention
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  handleDecrement() {
    console.log("Decrement", this.state.count);
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
