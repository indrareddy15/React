import React, { useState, useEffect } from "react";
import ExpenseForm from "../Components/ExpenseForm";
import IncomeForm from "../Components/IncomeForm";
import ExpenseList from "../Components/ExpenseList";
import ExpenseSummary from "../Components/ExpenseSummary";
import ExpenseTrends from "../Components/ExpenseTrends";
import WalletBalance from "../Components/WalletBalance";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utils/localStorage";
import { SnackbarProvider } from "notistack";
// import { useSnackbar } from "@mui/base/useSnackbar";

const HomePage = () => {
  const [expenses, setExpenses] = useState(
    loadFromLocalStorage("expenses") || []
  );
  const [walletBalance, setWalletBalance] = useState(
    loadFromLocalStorage("walletBalance") || 5000
  );

  useEffect(() => {
    saveToLocalStorage("expenses", expenses);
  }, [expenses]);

  useEffect(() => {
    saveToLocalStorage("walletBalance", walletBalance);
  }, [walletBalance]);

  const addExpense = (expense) => {
    if (walletBalance < expense.amount) {
      alert("Insufficient funds");
      return;
    }
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const deleteExpense = (id) => {
    const expense = expenses.find((exp) => exp.id === id);
    setExpenses(expenses.filter((exp) => exp.id !== id));
    setWalletBalance(walletBalance + expense.amount);
  };

  const editExpense = (id) => {
    // Implement editing logic if needed
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="app-container">
        <h1>Expense Tracker</h1>
        <WalletBalance balance={walletBalance} onIncreaseBalance={addIncome} />
        <ExpenseForm onAddExpense={addExpense} />
        <IncomeForm onAddIncome={addIncome} />
        <ExpenseList
          expenses={expenses}
          onEdit={editExpense}
          onDelete={deleteExpense}
        />
        <ExpenseSummary expenses={expenses} />
        <ExpenseTrends expenses={expenses} />
      </div>
    </SnackbarProvider>
  );
};

export default HomePage;
