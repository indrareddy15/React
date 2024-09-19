import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(display).toString();
        setResult(evalResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else {
      const lastChar = display[display.length - 1];
      const operators = ["+", "-", "*", "/"];

      if (operators.includes(lastChar) && operators.includes(value)) {
        return;
      }
      setDisplay(display + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={display} readOnly className="display" />
      <div className="result">{result}</div> {/* Display result here */}
      <div className="button-grid">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className="calc-button"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
