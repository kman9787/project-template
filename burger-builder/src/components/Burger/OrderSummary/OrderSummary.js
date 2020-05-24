import React from "react";
import Aux from "../../../hoc/AuxComponent";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with wht following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button buttonStyle="Danger" click={props.cancelPurchase}>
        CANCEL
      </Button>
      <Button buttonStyle="Success" click={props.continuePurchase}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
