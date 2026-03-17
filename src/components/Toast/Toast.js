import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToast, hideToast } from '../../redux/slices/uiSlice';
import styles from './Toast.module.css';

const Toast = () => {
  const dispatch = useDispatch();
  const { message, type, visible } = useSelector(selectToast);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => dispatch(hideToast()), 3000);
    return () => clearTimeout(timer);
  }, [visible, message, dispatch]);

  return (
    <div className={`${styles.toast} ${visible ? styles.show : ''} ${styles[type] || ''}`}>
      {message}
    </div>
  );
};

export default Toast;
