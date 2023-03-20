import React from "react";
import classes from "../../styles/Customer.module.css";
import ReviewCard from "./ReviewCard";

const Customer = () => {
  return (
    <section className={classes["section-customer"]}>
      <center className={classes["container"]}>
        <h1>Over a decade we're still exist</h1>
        <p className={classes["customer-description"]}>
          You might wondering, what`s look like inside your house. You can
          choose whether is fulll-furnished or not with our services
        </p>
        <ReviewCard />
      </center>
    </section>
  );
};

export default Customer;
