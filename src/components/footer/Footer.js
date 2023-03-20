//please import react icons before running the code
//check image in asset svg file not comming properly
// media query not used in css
// change the date obj and put the date 2021 maually if needed

import React from 'react';
import logo from '../../images/logo.svg';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import classes from '../../styles/Footer.module.css';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div className={classes['logo__container']}>
        <img src={logo} alt="footer-logo" />
        <span>&copy; {year} - All Rights Reserved.</span>
      </div>

      <div className={classes['other__wrapper']}>
        <div className={classes['footer__other']}>
          <div className={classes['foo__items']}>
            <h3>About</h3>
            <ul>
              <li>Company</li>
              <li>Contact Us</li>
              <li>Terms and Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className={classes['foo__items']}>
            <h3>Product</h3>
            <ul>
              <li>Catogories</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className={classes['foo__items']}>
            <h3>Discover</h3>
            <ul>
              <li>Teams</li>
              <li>Partner</li>
              <li>Career</li>
            </ul>
          </div>
          <div className={classes['social']}>
            <h3>Follow us</h3>
            <div className={classes['social__icons-container']}>
              <FaFacebook style={{ height: '35px', width: '35px' }} />

              <AiFillTwitterCircle
                style={{ height: '35px', width: '35px', margin: '0 1.4rem' }}
              />

              <BsLinkedin
                style={{ height: '35px', width: '35px', borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
