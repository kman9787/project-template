import React, { Component } from "react";
import Aux from "../../../hoc/AuxComponent/AuxComponent";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("Order summary will update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with wht following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button buttonStyle="Danger" click={this.props.cancelPurchase}>
          CANCEL
        </Button>
        <Button buttonStyle="Success" click={this.props.continuePurchase}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
