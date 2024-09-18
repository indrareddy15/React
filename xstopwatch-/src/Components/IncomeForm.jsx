import React, { useState } from "react";
import { useSnackbar } from "notistack";
// import { useSnackbar } from '@mui/base/useSnackbar'

const IncomeForm = ({ onAddIncome }) => {
  const [amount, setAmount] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      enqueueSnackbar("Amount is required", { variant: "error" });
      return;
    }
    onAddIncome(parseFloat(amount));
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount to Add"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
