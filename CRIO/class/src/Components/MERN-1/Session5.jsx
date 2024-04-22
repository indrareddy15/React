import React, { useState, useEffect } from "react";

const FCmpnt1 = () => {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount((c) => c + 1);
  };

  const handleDecreament = () => {
    setCount((c) => c - 1);
  };
  //atleast once useEffect will trigger according to rule of Hooks
  // after the first return of the jsx
  useEffect(() => {
    console.log("Hello World");

    return () => {
      console.log("Hello Bye");
    };
  }, [count]);

  // retrun callback will act as unmount in fc by using useEffect

  return (
    <div>
      <h1>Functional component</h1>
      <button onClick={handleIncreament}>+</button>
      <span>{count}</span>
      <button onClick={handleDecreament}>-</button>
    </div>
  );
};

export default FCmpnt1;
