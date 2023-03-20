import React from "react";
import search from "../../images/search.svg";
import classes from "../../styles/Input.module.css";

const Input = () => {
  return (
    <div className={classes["search-box"]}>
      <input
        type="text"
        placeholder="Search for apartments or houses to stay"
      />
      <img src={search} alt="" />
    </div>
  );
};

export default Input;
