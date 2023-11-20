import React, { useState } from "react";
import "./steps.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const StepsV1 = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const step = 1;

  const handlePrev = () => {
    //Update the state based on current state using call back function
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };
  const handleNext = () => {
    // alert("Next");
    if (step < 3) setStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <div className="close" onClick={() => setIsOpen((isOpens) => !isOpens)}>
        &times;
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Message {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepsV1;
