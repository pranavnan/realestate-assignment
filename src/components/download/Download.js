import React from 'react';
import iphone from '../../images/i-phone.svg';
import android from '../../images/android.svg';
import mobile from '../../images/mobile.svg';
import classes from '../../styles/Download.module.css';

const Download = () => {
  return (
    <section className={classes['section-download']}>
      <center>
        <div>
          <h1 className={classes['download-heading']}>
            So, what are you waiting for? Get our exclusive deal in one hand
          </h1>
          <p className={classes['download-subheading']}>
            Download our apps for free and feel the beat!
          </p>
          <div className={classes['action-btn']}>
            <img src={android} alt="android download" />
            <img src={iphone} alt="iphone download" />
          </div>
        </div>

        <div className={classes['mobile-app']}>
          <img src={mobile} alt="our app" />
        </div>
      </center>
    </section>
  );
};

export default Download;
