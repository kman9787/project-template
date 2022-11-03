import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inpuRef = useRef();

  const activate = () => {
    inpuRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return ({
      focus: activate
    })
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inpuRef}
      />
    </div>
  );
});

export default Input;
