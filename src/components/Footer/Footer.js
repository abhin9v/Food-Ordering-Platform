import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.logo}>Feast<span>Flow</span></div>
          <p className={styles.desc}>
            Delivering happiness one meal at a time. Fresh food from your favourite local
            restaurants, right at your doorstep.
          </p>
        </div>

        <div className={styles.col}>
          <h5>Company</h5>
          <button onClick={() => navigate('/about')}>About Us</button>
          <button onClick={() => navigate('/contact')}>Contact</button>
          <button>Careers</button>
          <button>Press</button>
        </div>

        <div className={styles.col}>
          <h5>Legal</h5>
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
          <button>Cookie Policy</button>
        </div>

        <div className={styles.col}>
          <h5>Support</h5>
          <button>Help Centre</button>
          <button>Track Order</button>
          <button>Restaurant Partners</button>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>
          © 2024 FeastFlow. Built by{' '}
          <a href="https://github.com/abhin9v" target="_blank" rel="noreferrer">
            Abhinav Singh
          </a>
          . All rights reserved.
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/abhin9v" target="_blank" rel="noreferrer" title="GitHub">🐙</a>
          <a href="https://www.linkedin.com/in/abhinav-singh-b1b797213/" target="_blank" rel="noreferrer" title="LinkedIn">💼</a>
          <a href="https://leetcode.com/u/abhinavvvvv/" target="_blank" rel="noreferrer" title="LeetCode">⚡</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
