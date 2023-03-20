import React from "react";
import logo from "../../images/logo.svg";
import hero from "../../images/hero.jpg";
import classes from "../../styles/Hero.module.css";
import Navbar from "./Navbar";
import Input from "./Input";

const Hero = () => {
  return (
    <header className={classes["hero"]}>
      <Navbar />
      <div className={classes["logo"]}>
        <img src={logo} alt="real state" />
      </div>
      <div className={classes["headings"]}>
        <h1>We help people finding their dream house</h1>
        <p>
          Having trouble finding a place to stay? You came to the right place!
          By saving your money, you can find house or apartment that right for
          you
        </p>
      </div>
      <div className={classes["hero-img"]}>
        <img src={hero} alt="hero" />
      </div>
      <Input />
    </header>
  );
};

export default Hero;
