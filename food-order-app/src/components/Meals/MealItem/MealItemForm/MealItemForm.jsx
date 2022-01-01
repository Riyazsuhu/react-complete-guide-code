import { useRef, useState } from "react";

import style from "./MealItemForm.module.css";
import Input from "../../../UI/Input/Input";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNo = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNo < 0 ||
      enteredAmountNo > 5
    ) {
      setIsFormValid(false);
      return
    }
    props.onAddToCart(enteredAmountNo);

  };
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          type: "number",
          id: props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button disabled={!isFormValid} type="submit" className={style.button}>
        + Add
      </button>
      {!isFormValid && <p>Please Enter Valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
