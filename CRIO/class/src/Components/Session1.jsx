/* eslint-disable react/require-render-return */
import React from "react";

class SessionOne extends React.Component {
  // it only requries when there is state is there in the class
  // call the super
  // super is responsible for invoking the Parent class constructor
  constructor() {
    super();
    this.state = {
      name: "Indra Reddy",
    };
  }
  render() {
    // it is function(used to display UI) which return the jsx => react function call
    // jsx is js code template to which display on UI with help of React.createElement
    // React.createElement converts the VDOM
    //React Function call will construct the VDOM
    return (
      <div>
        <h1>Welcome to Class Component {this.state.name}</h1>
      </div>
    );
  }
}

export default SessionOne;
