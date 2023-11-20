import React, { useState } from "react";

const AppCal = () => {
  const [bill, setBill]: any = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip: any = (bill * (percentage1 + percentage2)) / 2 / 100;

  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <Percentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </Percentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};
export default AppCal;

const BillInput = ({ bill, onSetBill }: any) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

const Percentage = ({ children, percentage, onSelect }: any) => {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const Output = ({ bill, tip }: any) => {
  return (
    <div>
      <h3>
        You pay {bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
};

const Reset = ({ onReset }: any) => {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
