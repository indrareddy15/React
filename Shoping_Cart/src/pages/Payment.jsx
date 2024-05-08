import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  
  const processPayment = () => {
    
    setTimeout(() => {
      navigate("/payment/success");
    }, 2000); 
  };

  return (
    <div>
      <h1>Payment Gateway</h1>
      <button onClick={processPayment}>Make Payment</button>
    </div>
  );
};

export default Payment;
