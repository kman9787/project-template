import React from "react";
import moment from "moment";
import "./ExpenseFilter.css";

const generateYearOption = (initValue) => {
  const maxCount = 10;
  const currentYear = moment().year();
  const options = [];

  for (let i = 0; i < maxCount; ++i) {
    options.push(currentYear - i);
  }

  return options.map((option, index) => {
    return (
      <option value={option.toString()} key={index}>
        {option}
      </option>
    );
  });
};

const ExpensesFilter = ({ filterYear, onSaveFilter }) => {
  const optionContent = generateYearOption();
  const selectHandler = (event) => {
    onSaveFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectHandler} value={filterYear}>
          {optionContent}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
