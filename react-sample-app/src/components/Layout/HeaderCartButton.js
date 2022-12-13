import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  
  const btnClasses = `${classes.button} ${ buttonHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if(items.length === 0){
      return;
    }

    setButtonHighlighted(true);

    const timeout = setTimeout(() => setButtonHighlighted(false), 300);

    return () => {
      clearTimeout(timeout);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
