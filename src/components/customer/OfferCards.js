import React from 'react';
import classes from '../../styles/OfferCard.module.css';
import offercard from '../../contants/offer-cards';

const OfferCards = () => {
  return (
    <section className={classes['section-offer']}>
      <center className={classes['offer-container']}>
        <ul className={classes['offers']}>
          {offercard.map((offer, idx) => (
            <li key={idx} className={classes['offer']}>
              <img
                src={offer.icon}
                alt={offer.title}
                className={classes['offer__icon']}
              />
              <div className={classes['offer__title']}>{offer.title}</div>
              <p className={classes['offer_description']}>
                {offer.description}
              </p>
            </li>
          ))}
        </ul>
      </center>
    </section>
  );
};

export default OfferCards;
