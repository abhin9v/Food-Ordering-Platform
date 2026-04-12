import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, selectItemQty } from '../redux/slices/cartSlice';
import { showToast } from '../redux/slices/uiSlice';
import CartPanel from '../components/CartPanel/CartPanel';
import restaurants from '../data/restaurants';
import menus from '../data/menus';
import formatINR from '../utils/formatCurrency';
import styles from './MenuPage.module.css';

/* ── Single menu item row ── */
const MenuItem = ({ item, restaurantId }) => {
  const dispatch = useDispatch();
  const qty      = useSelector(selectItemQty(item.id));

  const handleAdd = () => {
    dispatch(addItem({ ...item, restaurantId }));
    dispatch(showToast({ message: `Added ${item.name} to cart! 🛒`, type: 'success' }));
  };

  const handleRemove = () => dispatch(removeItem(item.id));

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemLeft}>
        <img
          className={styles.itemThumb}
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={88}
          height={88}
        />
        <div>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemDesc}>{item.desc}</div>
        </div>
      </div>

      <div className={styles.itemRight}>
        <div className={styles.itemPrice}>{formatINR(item.price)}</div>

        {qty > 0 ? (
          <div className={styles.qtyControl}>
            <button className={styles.qtyBtn} onClick={handleRemove}>−</button>
            <span className={styles.qtyNum}>{qty}</span>
            <button className={styles.qtyBtn} onClick={handleAdd}>+</button>
          </div>
        ) : (
          <button className={styles.addBtn} onClick={handleAdd}>+ Add</button>
        )}
      </div>
    </div>
  );
};

/* ── Page ── */
const MenuPage = () => {
  const { id }   = useParams();
  const navigate = useNavigate();

  const restaurant = restaurants.find(r => r.id === Number(id));
  const menu       = menus[Number(id)];

  if (!restaurant || !menu) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', color: 'var(--text2)' }}>
        <p>Restaurant not found.</p>
        <button className="btn-primary" style={{ marginTop: '1rem' }}
          onClick={() => navigate('/restaurants')}>
          Back to Restaurants
        </button>
      </div>
    );
  }

  return (
    <main className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/restaurants')}>
          ← Back to Restaurants
        </button>
        <div className={styles.restaurantInfo}>
          <img
            className={styles.restaurantThumb}
            src={restaurant.image}
            alt={restaurant.name}
            width={120}
            height={120}
          />
          <div>
            <h1 className={styles.restaurantName}>{restaurant.name}</h1>
            <div className={styles.restaurantMeta}>
              ⭐ {restaurant.rating} &nbsp;•&nbsp; 🕒 {restaurant.time} min &nbsp;•&nbsp; {restaurant.cuisine}
            </div>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className={styles.layout}>
        {/* Menu items */}
        <div className={styles.menuContent}>
          {Object.entries(menu).map(([category, items]) => (
            <div key={category}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              {items.map(item => (
                <MenuItem key={item.id} item={item} restaurantId={restaurant.id} />
              ))}
            </div>
          ))}
        </div>

        {/* Sticky cart panel */}
        <CartPanel />
      </div>
    </main>
  );
};

export default MenuPage;
