import React from "react";
import { useState } from "react";

// ParentComponent.js

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.js

const ChildComponent = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
