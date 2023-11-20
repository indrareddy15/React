import React, { useState } from "react";
import "./steps.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
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
          <StepMessage>
            Message {step}: {messages[step - 1]}
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
              <span>👈</span> Preview
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>👉</span> Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const Button = ({ textColor, bgColor, onClick, children }: any) => {
  return (
    <div>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

const StepMessage = ({ step, children }: any) => {
  return (
    <p className="message">
      <h3>Step: {step}</h3>
      {children}
    </p>
  );
};

const ParentStep = () => {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in the content</p>
      </StepMessage>
    </div>
  );
};
export default ParentStep;
