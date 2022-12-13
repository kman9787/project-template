import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  if (action.type === "ADD_ITEM") {
    const updatedTotal = state.totalAmount + (action.data.price * action.data.amount);
    const existingItemIndex = state.items.findIndex(item => item.id === action.data.id);
    const existingItem = state.items[existingItemIndex];
    
    let updatedItems;

    if(existingItem){
      let updatedItem;
      
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.data.amount
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.data);
    }

    return {
        items: updatedItems,
        totalAmount: updatedTotal
    }
  } else if (action.type === "DEL_ITEM") {
    const existingItemIndex = state.items.findIndex(item => item.id === action.data.id);
    const existingItem = state.items[existingItemIndex];
    const updatedTotal = state.totalAmount - (existingItem.price);
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.data.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [ ...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }

  return defaultCart;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCart);

  const addItemtoCartHandler = (item) => {
    dispatchAction({ type: "ADD_ITEM", data: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchAction({ type: "DEL_ITEM", data: {id: id}});
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
