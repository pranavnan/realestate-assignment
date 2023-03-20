import React from "react";
import navlist from "../../contants/navbar-list";
import classes from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes["navbar"]}>
      <ul className={classes["navlinks"]}>
        {navlist.map((navlink, idx) => (
          <li key={idx} className={classes["navlink"]}>
            <a href={`#${navlink.toLowerCase()}`}>{navlink}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
