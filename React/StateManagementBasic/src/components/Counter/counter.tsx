import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("july 21, 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <span>Counter: {count}</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
      </div>
      <div>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};

export default Counter;
