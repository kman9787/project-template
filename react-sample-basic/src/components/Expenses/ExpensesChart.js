import React from "react";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

const ExpensesChart = ({filterYear, expensesList}) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for(const expense of  expensesList) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount; 
    chartDataPoints[expenseMonth].id = expense.id + "_" + expense.amount
  }

  return <ExpenseChart dataPoints={chartDataPoints}/>;
};

export default ExpensesChart;
