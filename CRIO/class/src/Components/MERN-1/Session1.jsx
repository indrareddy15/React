import React from "react";

class SessionOne extends React.Component {
  //  React.component is parent class

  //  constructor only requries when there is state is there in the class
  //  call the super
  //  super is responsible for invoking the Parent(React.Component) class constructor
  constructor() {
    super();
    this.state = {
      name: "Indra Reddy",
    };
  }
  render() {
    //  render method used to display UI with help  return the jsx
    //  jsx is js code template which converts the html syntax to react function call
    //  React Function call helps to construct the VDOM
    //  VDOM will updated the actual DOM then displayes in UI
    //  example this how react function call help to create a virtualDOM
    //  React.createElement("div", " ", React.createElement("h1", " ", "Welcome to class component"))
    //  <div>Helle world</div> => React.createElement() => {
    //  node: "div"
    //  children: []
    //  }
    // JSX code
    // const element = <h1>Hello, world!</h1>;

    // After Babel transformation
    // const element = React.createElement(
    //   'h1',
    //   null,
    //   'Hello, world!'
    // );

    return (
      <div>
        <h1>Welcome to Class Component {this.state.name}</h1>
      </div>
    );
  }
}

export default SessionOne;

