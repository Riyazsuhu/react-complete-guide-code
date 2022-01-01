import { useReducer } from "react";
import CartContext from "./cartContext";

const initialCartState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedCartItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => action.item.id === item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }
    return {
      items: updatedCartItems,
      totalAmount: state.totalAmount + action.item.amount * action.item.price,
    };
  } else if (action.type === "REMOVE") {
    let updatedCartItems;
    let updatedTotalAmount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => action.id === item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.amount === 1) {
      updatedCartItems = state.items.filter((item) => item.id !== action.id);
      updatedTotalAmount = state.totalAmount - existingCartItem.price;
    } else {
      updatedCartItems = [...state.items];
      let updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedTotalAmount = state.totalAmount - existingCartItem.price;
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const clearCartHandler = () => {
    dispatchCartAction({type: ''})
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
