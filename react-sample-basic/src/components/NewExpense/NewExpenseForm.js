import moment from "moment";
import React from "react";
import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = ({ onSaveExpenseData }) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState(moment().format("YYYY-MM-DD"));
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleErrorTittle, setToggleErorTittle] = useState(false);
  const [toggleErrorAmount, setToggleErorAmount] = useState(false);

  const titleChangeHandler = (event) => {
    setExpenseTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setExpenseAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!expenseTitle) {
      console.error("Invalid title");
      setToggleErorTittle(true);
      return false;
    } else {
      setToggleErorTittle(false);
    }

    if(!expenseAmount) {
      console.error("Invalid amount");
      setToggleErorAmount(true);
      return false;
    } else {
      setToggleErorAmount(false);
    }

    const expenseData = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate),
    };

    onSaveExpenseData(expenseData);
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate(moment().format("YYYY-MM-DD"));
    
    
  };

  const addExpenseHandler = () => {
    setToggleForm(true);
  };

  const cancelHandler = () => {
    setToggleForm(false);
  }

  if (toggleForm) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__control">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={expenseTitle}
              className={toggleErrorTittle ? "new-expense__error" : ""}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={expenseAmount}
              className={toggleErrorAmount ? "new-expense__error" : ""}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
              onChange={dateChangeHandler}
              value={expenseDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  return (
    <div className="new-expense__actions2">
      <button type="button" onClick={addExpenseHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpenseForm;
