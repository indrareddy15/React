import React from "react";
import ReactDom from "react-dom";

//  const root = React.createElement("type", "props", "content");
//  The syntax is as given below (Set the "props" value to null)

// const root = React.createElement()

// ReactDOM.render(<element-to-render>, document.querySelector("#root"));

// const element = React.createElement("h1", null, "React element");
// const root1 = React.createElement("h1", null, "React element")

// const counterDisplayElement = React.createElement("h1", null, 0);
// const incrementButtonElement = React.createElement("button", null, "+");
// const decrementButtonElement = React.createElement("button", null, "-");
// const containerDivElement = React.createElement("div", null, [
//   counterDisplayElement,
//   incrementButtonElement,
//   decrementButtonElement,
//   counterDisplayElement,
// ]);

// console.log(containerDivElement);

// const root3 = ReactDOM.render(
//   containerDivElement,
//   document.querySelector("#root")
// );

// const counterDisplayElement = React.createElement(
//   "h1",
//   { className: "counter-display" },
//   0
// );

// const counterDisplayElementJsx = <h1 className="counter-display">0</h1>;

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <div className="wrapper">
//         <h1 className="title">Title</h1>
//         <h2 className="h2">Sub Heading</h2>
//       </div>
//     );
//   }
// }

// class HelloWorld extends React.Component {
//   render() {
//     return React.createElement(
//       "div",
//       { className: "wrapper" },
//       React.createElement("h1", { className: "title" }, "Title"),
//       React.createElement("h2", { className: "h2" }, "Sub Heading")
//     );
//   }
// }

class App extends React.Component {
  state = {
    counter: 0,
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.increaseCounter}>+</button>
      </div>
    );
  }
}


// ReactDOM.render(<Counter />, document.querySelector("#root"));
