import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import PropTypes from "prop-types";

const ExpensesList = ({ expensesList }) => {

  if (expensesList.length === 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }

  return (
    <ul className="expenses-list">
      {expensesList.map((item, index) => (
        <ExpenseItem
          key={item.id + index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

ExpensesList.prototype = {
  expensesList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ExpensesList;
