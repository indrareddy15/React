import React, { useState } from "react";

function Counters() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const date = new Date("july 21, 2027");
  date.setDate(date.getDate() + count);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e: any) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <input
          placeholder="Enter the Value"
          value={count}
          onChange={(e: any) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + 1)}>+</button>
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
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default Counters;
