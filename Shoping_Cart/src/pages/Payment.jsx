import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  // Simulate payment process
  const processPayment = () => {
    // You can perform any necessary payment processing here
    // For demonstration purposes, we'll simply redirect the user to a success page after a delay
    setTimeout(() => {
      navigate("/payment/success");
    }, 2000); // Redirect to success page after 2 seconds
  };

  return (
    <div>
      <h1>Payment Gateway</h1>
      <button onClick={processPayment}>Make Payment</button>
    </div>
  );
};

export default Payment;
