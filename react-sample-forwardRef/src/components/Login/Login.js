import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../input/Input";

const emailReducer = (lastState, action) => {
  if (action.type === "SET_VALUE") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  } else if (action.type === "VALIDATE") {
    return {
      value: lastState.value,
      isValid: lastState.value.includes("@"),
    };
  }

  return lastState;
};

const passworReducer = (lastState, action) => {
  if (action.type === "SET_VALUE") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  } else if (action.type === "VALIDATE") {
    return {
      value: lastState.value,
      isValid: lastState.value.trim().length > 6,
    };
  }
  return lastState;
};

const Login = () => {
  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passworReducer, {
    value: "",
    isValid: false,
  });

  // destructuring
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    // Debouncing
    const timerId = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "SET_VALUE", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "SET_VALUE", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "VALIDATE" });
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "VALIDATE" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailInputRef}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={passwordInputRef}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
