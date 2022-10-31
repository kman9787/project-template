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

  return lastState
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
  return lastState
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false
  });

  const [passwordState, dispatchPassword] = useReducer(passworReducer, {
    value: "",
    isValid: false
  });

  // destructuring
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    // Debouncing
    const timerId = setTimeout(() => {
      console.log('Checking form validity');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      clearTimeout(timerId);
    }

  }, [emailIsValid, passwordIsValid]);

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
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
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
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>

          {/* <Button type="button" className={classes.btn} onClick={() => {
            console.log("Click");
            dispatchEmail({ type: "", val: "TEST" })
          }}>
            Test
          </Button> */}
        </div>
      </form>
    </Card>
  );
};

export default Login;
