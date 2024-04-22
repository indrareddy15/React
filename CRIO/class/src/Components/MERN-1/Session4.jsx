// Life cycle methods
import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleFetch = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    return data;
  };

  // On component load, fetch data
  componentDidMount() {
    // Example when we want to load the data first on load of page or component load we use componentDidMount
    console.log("Hello World");
    this.handleFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    // This method is triggred when a state or prop change then updation happen
    // this method has an access of currentState and PrevState
    // advantage is we can compare the  prevProps and PrevState with currentProps and currentState
    console.log(
      "Component DidUpdate",
      "Current State:",
      this.state.count,
      "current State:",
      prevProps,
      "prevState:",
      prevState.count
    );
  }

  componentWillUnmount() {
    console.log("Hey Bro..! , Component is Unmounted (Destroyed)");
  }

  handleIncreament = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Life Cycle</h1>
        <button onClick={this.handleIncreament}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default LifeCycle;
