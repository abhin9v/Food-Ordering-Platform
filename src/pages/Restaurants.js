import React from 'react';
import RestaurantGrid from '../components/RestaurantGrid/RestaurantGrid';
import styles from './Restaurants.module.css';

const Restaurants = () => (
  <main className={styles.page}>
    <div className={styles.header}>
      <h1 className={styles.title}>
        All <span className={styles.accent}>Restaurants</span>
      </h1>
      <p className={styles.sub}>
        Browse our full selection of restaurants and cuisines
      </p>
    </div>

    <div className={styles.content}>
      <RestaurantGrid />
    </div>
  </main>
);

export default Restaurants;
