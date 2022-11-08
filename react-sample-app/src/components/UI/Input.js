import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef(({ lable, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{lable}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
