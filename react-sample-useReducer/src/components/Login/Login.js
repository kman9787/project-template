import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (lastState, action) => {

  if (action.type === 'SET_VALUE') {
    return {
      value: action.val,
      isValid: action.val.includes('@')
    }
  } else if (action.type === "VALIDATE") {
    return {
      value: lastState.value,
      isValid: lastState.value.includes('@')

    }
  }

  return {
    value: "",
    isValid: false
  }
};

const passworReducer = (lastState, action) => {

  if (action.type === 'SET_VALUE') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    }
  } else if (action.type === "VALIDATE") {
    return {
      value: lastState.value,
      isValid: lastState.value.trim().length > 6

    }
  }
  return {
    value: "",
    isValid: false
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false
  });

  const [passwordState, dispatchPassword] = useReducer(passworReducer, {
    value: "",
    isValid: false
  });


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "SET_VALUE", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "SET_VALUE", val: event.target.value })
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "VALIDATE" });
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "VALIDATE" });
  };

  const formValid = () =>{
    return emailState.isValid && passwordState.isValid;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
