import React, { useState } from "react";

const FCmpnt = ({ diff }) => {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount((c) => c + diff);
  };

  const handleDecreament = () => {
    setCount((c) => c - diff);
  };

  return (
    <div>
      <h1>Functional component</h1>
      <button onClick={handleIncreament}>+</button>
      <span>{count}</span>
      <button onClick={handleDecreament}>-</button>
    </div>
  );
};

export default FCmpnt;
