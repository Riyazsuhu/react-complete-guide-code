import { useState, useRef } from "react";

import style from "./CheckOutForm.module.css";

const CheckOutForm = (props) => {
  const [formState, setFormState] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const isEmpty = (value) => value.trim() === "";
  const IsFiveDigit = (value) => value.trim().length === 5;

  const confirmHandler = (e) => {
    e.preventDefault();

    const nameValue = nameInput.current.value;
    const streetValue = streetInput.current.value;
    const postalValue = postalInput.current.value;
    const cityValue = cityInput.current.value;

    const isNameValid = !isEmpty(nameValue);
    const isStreetValid = !isEmpty(streetValue);
    const isPostalValid = IsFiveDigit(postalValue);
    const isCityValid = !isEmpty(cityValue);

    setFormState({
      name: isNameValid,
      street: isStreetValid,
      postal: isPostalValid,
      city: isCityValid,
    });

    const formValid =
      isNameValid && isStreetValid && isPostalValid && isCityValid;
    if (!formValid) return;

    props.placeOrder({
      name: nameValue,
      street: streetValue,
      postal: postalValue,
      city: cityValue,
    });
  };

  const nameClass = `${style.control} ${formState.name ? "" : style.invalid}`;
  const streetClass = `${style.control} ${
    formState.street ? "" : style.invalid
  }`;
  const postalClass = `${style.control} ${
    formState.postal ? "" : style.invalid
  }`;
  const cityClass = `${style.control} ${formState.city ? "" : style.invalid}`;

  return (
    <form className={style.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formState.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formState.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInput} />
        {!formState.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formState.city && <p>Please enter a valid city</p>}
      </div>
      <div className={style.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={style.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOutForm;
