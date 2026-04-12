import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems, selectCartTotals,
  addItem, removeItem, deleteItem,
} from '../../redux/slices/cartSlice';
import { selectModals, closeModal, openModal } from '../../redux/slices/uiSlice';
import formatINR from '../../utils/formatCurrency';
import styles from './CartModal.module.css';

const CartModal = () => {
  const dispatch = useDispatch();
  const modals   = useSelector(selectModals);
  const items    = useSelector(selectCartItems);
  const { subtotal, delivery, gst, total } = useSelector(selectCartTotals);

  if (!modals.cart) return null;

  const isEmpty = items.length === 0;

  return (
    <div className={styles.overlay}
      onClick={e => e.target === e.currentTarget && dispatch(closeModal('cart'))}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => dispatch(closeModal('cart'))}>✕</button>
        <h2 className={styles.title}>Your Cart 🛒</h2>

        {isEmpty ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🛒</div>
            <p>Your cart is empty</p>
            <p className={styles.emptySub}>Add something delicious!</p>
          </div>
        ) : (
          <>
            <div className={styles.itemList}>
              {items.map(item => (
                <div key={item.id} className={styles.item}>
                  {item.image && (
                    <img className={styles.itemThumb} src={item.image} alt="" width={44} height={44} aria-hidden />
                  )}
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemControls}>
                    <button className={styles.qtyBtn}
                      onClick={() => dispatch(removeItem(item.id))}>−</button>
                    <span className={styles.qty}>{item.qty}</span>
                    <button className={styles.qtyBtn}
                      onClick={() => dispatch(addItem({ ...item }))}>+</button>
                  </div>
                  <div className={styles.itemPrice}>{formatINR(item.price * item.qty)}</div>
                  <button className={styles.deleteBtn}
                    onClick={() => dispatch(deleteItem(item.id))} title="Remove">✕</button>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <div className={styles.row}><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
              <div className={styles.row}><span>Delivery</span><span>{formatINR(delivery)}</span></div>
              <div className={styles.row}><span>GST (5%)</span><span>{formatINR(gst)}</span></div>
              <div className={`${styles.row} ${styles.total}`}>
                <span>Total</span><span>{formatINR(total)}</span>
              </div>
            </div>

            <button className={styles.checkoutBtn}
              onClick={() => dispatch(openModal('payment'))}>
              Proceed to Checkout — {formatINR(total)}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
