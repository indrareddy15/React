import React from "react";

const WalletBalance = ({ balance, onIncreaseBalance }) => {
  return (
    <div>
      <h2>Wallet Balance: ${balance}</h2>
      <button onClick={() => onIncreaseBalance(1000)}>Add $1000</button>
    </div>
  );
};

export default WalletBalance;
