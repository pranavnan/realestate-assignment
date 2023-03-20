import React from 'react';
import classes from '../../styles/Future.module.css';
import future from '../../images/future.svg';

const Future = () => {
  return (
    <section className={classes['section-future']}>
      <img
        src={future}
        alt="buildings tower"
        className={classes['future-image']}
      />
      <div className={classes['future-details']}>
        <h1 className={classes['future-heading']}>
          Invest for future, <br /> Why not?
        </h1>
        <p className={classes['future-description']}>
          We seek out properties that can produce a regular, predictable return
          on investment, as well as the potential for capital appreciation. We
          also take the time to ensure that any properties we offer are
          high-quality, safe and secure investments
        </p>
        <button className={classes['btn']}>Explore</button>
      </div>
    </section>
  );
};

export default Future;
