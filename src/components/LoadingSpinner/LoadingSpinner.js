import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
  <div className={styles.wrapper}>
    <div className={styles.spinner} />
    <p className={styles.label}>Loading…</p>
  </div>
);

export default LoadingSpinner;
