import { Fragment } from "react";

import style from "./Header.module.css";
import headerImg from "../../../assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={style["main-image"]}>
        <img src={headerImg} alt="No-Img" />
      </div>
    </Fragment>
  );
};

export default Header;
