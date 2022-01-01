import { useContext, useState, useEffect } from "react";

import CartIcon from "../../Cart/CartIcon/CartIcon";
import style from "./HeaderCartButton.module.css";
import cartContext from "../../../store/cart/cartContext";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;
  const NoOfItemInCart = items.reduce(
    (current, item) => (current += item.amount),
    0
  );
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout();
    };
  }, [items]);
  const cartButtonStyle = `${style.button} ${
    btnIsHighlighted ? style.bump : ""
  }`;
  return (
    <button onClick={props.onClick} className={cartButtonStyle}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{NoOfItemInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
