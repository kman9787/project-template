import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.data);
    const updatedTotal = state.totalAmount + (action.data.price * action.data.amount);

    return {
        items: updatedItems,
        totalAmount: updatedTotal
    }
  } else if (action.type === "DEV_ITEM") {

  }

  return state;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCart);

  const addItemtoCartHandler = (item) => {
    dispatchAction({ type: "ADD_ITEM", data: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchAction({ type: "DEL_ITEM", data: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
