import React from "react";

import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseHandler = (data) => {
    const expenseData = {
      ...data,
      id: (Math.random() * 1000000000).toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
