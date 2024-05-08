import React from "react";

const PaymentSuccess = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Payment Successful!</h1>
        <p>Your payment has been successfully processed.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
};

export default PaymentSuccess;
