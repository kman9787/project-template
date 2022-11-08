import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if ( enteredAmount.trim().lenth === 0 ||
      enteredAmountNum < 1 || enteredAmountNum > 5 ) {
        console.error("ERROR from not valid")
        setAmountIsValid(false);
        return
    }

    onAddToCart(enteredAmountNum);
    setAmountIsValid(true);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        lable="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amopunt 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
