import React from "react";
import { useState } from "react";
import moment from "moment";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";


const Expenses = ({ expenses }) => {
  const [year, setYear] = useState(moment().year());
  const filterHandler = (year) => {
    setYear(year);
  };

  const expensesList = expenses
    ? expenses.filter((data) => data.date.getFullYear() === parseInt(year))
    : [];

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSaveFilter={filterHandler} filterYear={year} />
        <ExpensesChart expensesList={expensesList} />
        <ExpensesList expensesList={expensesList} />
      </Card>
    </div>
  );
};

export default Expenses;
