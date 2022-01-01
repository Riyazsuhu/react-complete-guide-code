import { useContext } from "react";

import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
import cartContext from "../../../store/cart/cartContext";

const MealItem = (props) => {
  const price = `₹${props.meal.price.toFixed(2)}`;
  const cartCtx = useContext(cartContext);
  const onFormSubmit = async (amount) => {
    cartCtx.addItem({ ...props.meal, amount });
  };
  return (
    <li className={style.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={style.description}>{props.meal.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onFormSubmit} id={props.meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
