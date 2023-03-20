import React from 'react';
import classes from '../../styles/Featured.module.css';
import FeaturedCards from './FeaturedCards';

const Featured = () => {
  return (
    <section className={classes['section-featured']}>
      <center>
        <h1 className="all-headings">Featured Properties</h1>
        <p className="all-subheadings">
          The well-furnished home and apartments are available
        </p>

        <FeaturedCards />
      </center>
    </section>
  );
};

export default Featured;
