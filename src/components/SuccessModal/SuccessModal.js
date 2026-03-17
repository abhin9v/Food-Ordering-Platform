import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModals, closeModal } from '../../redux/slices/uiSlice';
import { selectLastOrder } from '../../redux/slices/uiSlice';
import { useNavigate } from 'react-router-dom';
import styles from './SuccessModal.module.css';

const SuccessModal = () => {
  const dispatch  = useDispatch();
  const navigate  = useNavigate();
  const modals    = useSelector(selectModals);
  const orderId   = useSelector(selectLastOrder);

  if (!modals.success) return null;

  const handleClose = () => {
    dispatch(closeModal('success'));
    navigate('/');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.icon}>✅</div>
        <h2 className={styles.title}>Order Placed!</h2>
        <p className={styles.sub}>Your food is being prepared. Get ready for a feast!</p>
        <div className={styles.orderId}>Order ID: {orderId}</div>
        <p className={styles.eta}>
          Estimated delivery: <strong>30–45 minutes</strong>
        </p>
        <button className={styles.btn} onClick={handleClose}>
          Back to Home 🏠
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
