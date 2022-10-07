import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount, ...props }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = (event) => {
    console.log("expenseBtn clicked: ", event);
    setExpenseTitle("title Change");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
