import React from 'react';
import reviewcard from '../../contants/review-card';
import classes from '../../styles/ReviewCard.module.css';

const ReviewCard = () => {
  return (
    <div className={classes['review-card']}>
      <ul className={classes['card-lists']}>
        {reviewcard.map((review, idx) => (
          <li className={classes['card']} key={idx}>
            <div>{review.number}</div>
            <p className={classes['card-text']}>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewCard;
