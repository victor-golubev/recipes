import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navLinkClass = ({ isActive }) => (isActive ? styles.active : "");

  return (
    <header>
      <nav>
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/users-recipes" className={navLinkClass}>
          Users recipes
        </NavLink>
        <NavLink to="/public-recipes" className={navLinkClass}>
          Public recipes
        </NavLink>
        <NavLink to="/products" className={navLinkClass}>
          Products
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
