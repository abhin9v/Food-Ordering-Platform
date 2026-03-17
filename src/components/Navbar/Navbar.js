import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartCount } from '../../redux/slices/cartSlice';
import { selectIsLoggedIn, selectUser, logout } from '../../redux/slices/authSlice';
import { openModal } from '../../redux/slices/uiSlice';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home',        path: '/' },
  { label: 'Restaurants', path: '/restaurants' },
  { label: 'About',       path: '/about' },
  { label: 'Contact',     path: '/contact' },
];

const Navbar = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const dispatch  = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user       = useSelector(selectUser);

  const initials = user?.name?.substring(0, 2).toUpperCase() || '';

  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        Feast<span>Flow</span>
      </div>

      <div className={styles.links}>
        {NAV_LINKS.map(({ label, path }) => (
          <button
            key={path}
            className={`${styles.link} ${location.pathname === path ? styles.active : ''}`}
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.right}>
        {isLoggedIn ? (
          <div className={styles.userRow}>
            <div className={styles.avatar} title={user?.name}>{initials}</div>
            <button className={styles.authBtn} onClick={() => dispatch(logout())}>
              Sign Out
            </button>
          </div>
        ) : (
          <button className={styles.authBtn} onClick={() => dispatch(openModal('login'))}>
            Sign In
          </button>
        )}

        <button
          className={styles.cartBtn}
          onClick={() => dispatch(openModal('cart'))}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className={styles.cartCount}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
