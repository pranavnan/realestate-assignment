import React from 'react';
import classes from '../../styles/Details.module.css';
import OfferCards from './OfferCards';

const Details = () => {
  return (
    <section className={classes['details']}>
      <center className={classes['details__container']}>
        <h1 className={classes['details__heading']}>
          What we offer to our customers?
        </h1>
        <p className={classes['details__para']}>
          We make sure to provide what best for our customers{' '}
        </p>

        <OfferCards />
      </center>
    </section>
  );
};

export default Details;
