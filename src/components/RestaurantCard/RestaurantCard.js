import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RestaurantCard.module.css';

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();
  const { id, name, emoji, rating, cuisine, tags, time, minOrder, badge, badgeVeg } = restaurant;

  return (
    <div className={styles.card} onClick={() => navigate(`/restaurant/${id}`)}>
      <div className={styles.imgBox}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={`${styles.badge} ${badgeVeg ? styles.badgeVeg : ''}`}>{badge}</span>
      </div>

      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.meta}>
          <span className={styles.rating}>⭐ {rating}</span>
          <span>🕒 {time} min</span>
        </div>
        <div className={styles.tags}>
          {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.cuisine}>{cuisine}</span>
        <span className={styles.minOrder}>Min: ₹{minOrder}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
