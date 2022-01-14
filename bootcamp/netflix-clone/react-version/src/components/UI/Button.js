import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={classes.button}
      type={props.type}
      form={props.form}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
