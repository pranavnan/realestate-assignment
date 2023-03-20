import React from 'react';
import classes from '../../styles/FeaturedCards.module.css';
import featured from '../../contants/featured';

const FeaturedCards = () => {
  return (
    <div className={classes['featured-cards']}>
      <center>
        <ul className={classes['feature-cards']}>
          {featured.map((feature, idx) => (
            <li key={idx} className={classes['feature-card']}>
              <img
                className={classes['feature-img']}
                src={feature.image}
                alt={feature.title}
              />
              <div className={classes['feature-title']}>{feature.title}</div>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default FeaturedCards;
