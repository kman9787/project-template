import React from "react";
import "./Button.css";

const button = (props) => (
  <button
    className={`Button ${
      Array.isArray(props.buttonStyle)
        ? props.buttonStyle.join(" ")
        : props.buttonStyle
    }`}
    onClick={props.click}
  >
    {props.children}
  </button>
);

export default button;
