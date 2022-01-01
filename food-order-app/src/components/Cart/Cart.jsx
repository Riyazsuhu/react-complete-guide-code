import { useState, useContext, Fragment } from "react";

import style from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import cartContext from "../../store/cart/cartContext";
import CartItem from "./CartItem/CartItem";
import CheckOutForm from "./checkOutForm/CheckOutForm";
import useHttpRequest from "../../hook/useHttpRequest";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(cartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const onAddHandler = (item) => cartCtx.addItem({ ...item, amount: 1 });
  const onRemoveHandler = (id) => cartCtx.removeItem(id);
  const { sendRequest, isLoading, isError } = useHttpRequest();
  const [isSubmit, setIsSubmit] = useState(false);

  const openCheckout = () => setIsCheckout(true);

  const placeOrder = (userDetails) => {
    const credentials = {
      collection: "order.json",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderDetails: cartCtx.items,
          userDetails,
        }),
      },
    };
    const {isFailed} = sendRequest(credentials);
    setIsSubmit(true);
    !isFailed && cartCtx.clearCart()
  };

  const cartItem = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const cartActions = (
    <div className={style.actions}>
      <button onClick={props.onHideCart} className={style["button--alt"]}>
        Close
      </button>
      <button className={style.button} onClick={openCheckout}>
        Order
      </button>
    </div>
  );
  const cartContent = (
    <Fragment>
      {cartItem}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckOutForm onClose={props.onHideCart} placeOrder={placeOrder} />
      )}
      {!isCheckout && cartActions}
    </Fragment>
  );
  const orderPlacedContent = (
    <Fragment>
      <p>
        {isError ? "Something went wrong!!" : "Your order placed successfully"}
      </p>
      <div className={style.actions}>
        <button onClick={props.onHideCart} className={style.button}>
          Close
        </button>
      </div>
    </Fragment>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {!isLoading && !isSubmit && cartContent}
      {isLoading &&  !isSubmit && <p>Please wait order placing..</p>}
      {isSubmit && orderPlacedContent}
    </Modal>
  );
};

export default Cart;
