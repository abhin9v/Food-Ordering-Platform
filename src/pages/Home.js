import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/slices/uiSlice';
import RestaurantGrid from '../components/RestaurantGrid/RestaurantGrid';
import styles from './Home.module.css';

const FLOATING_CARDS = [
  { emoji: '🍕', name: 'Margherita Pizza',   sub: 'Spicy Palace • ⭐ 4.8', price: '₹299' },
  { emoji: '🍔', name: 'Double Smash Burger', sub: 'Burger Bros • ⭐ 4.6',   price: '₹249' },
  { emoji: '🍜', name: 'Dragon Noodles',      sub: 'Wok & Roll • ⭐ 4.7',   price: '₹189' },
];

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />

        <div className={styles.heroGrid}>
          {/* Left copy */}
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>🔥 #1 Food Delivery Platform</div>

            <h1 className={styles.heroTitle}>
              Order <span className={styles.accent}>Delicious</span> Food{' '}
              with Just <span className={styles.accent2}>One Click</span>
            </h1>

            <p className={styles.heroSub}>
              Explore hundreds of restaurants, cuisines, and exclusive deals.
              Fresh meals delivered to your doorstep in minutes.
            </p>

            <div className={styles.heroActions}>
              <button className="btn-primary" onClick={() => navigate('/restaurants')}>
                🍽️ Explore Restaurants
              </button>
              <button className="btn-secondary" onClick={() => dispatch(openModal('signup'))}>
                Sign Up Free →
              </button>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNum}>500+</div>
                <div className={styles.statLabel}>Restaurants</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>50K+</div>
                <div className={styles.statLabel}>Customers</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>30 min</div>
                <div className={styles.statLabel}>Avg Delivery</div>
              </div>
            </div>
          </div>

          {/* Right floating cards */}
          <div className={styles.heroRight}>
            {FLOATING_CARDS.map((card, i) => (
              <div
                key={card.name}
                className={styles.floatCard}
                style={{ animationDelay: `${i}s`, marginRight: i === 1 ? '2rem' : 0 }}
              >
                <span className={styles.floatEmoji}>{card.emoji}</span>
                <div className={styles.floatInfo}>
                  <strong>{card.name}</strong>
                  <small>{card.sub}</small>
                </div>
                <span className={styles.floatPrice}>{card.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Restaurants section ── */}
      <section className={styles.restaurantsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Top <span className={styles.accent}>Restaurants</span>
          </h2>
          <button className={styles.seeAll} onClick={() => navigate('/restaurants')}>
            See All →
          </button>
        </div>

        <RestaurantGrid limit={6} />
      </section>
    </main>
  );
};

export default Home;
