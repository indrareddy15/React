import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <span>
            {expense.title} - ${expense.amount} - {expense.category} -{" "}
            {expense.date}
          </span>
          <FaEdit onClick={() => onEdit(expense.id)} />
          <FaTrash onClick={() => onDelete(expense.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
