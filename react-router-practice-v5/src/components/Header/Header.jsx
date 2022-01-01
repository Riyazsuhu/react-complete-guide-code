import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={style.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to="/product">
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
