import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems, selectCartTotals,
  addItem, removeItem,
} from '../../redux/slices/cartSlice';
import { openModal } from '../../redux/slices/uiSlice';
import formatINR from '../../utils/formatCurrency';
import styles from './CartPanel.module.css';

const CartPanel = () => {
  const dispatch = useDispatch();
  const items    = useSelector(selectCartItems);
  const { subtotal, delivery, gst, total } = useSelector(selectCartTotals);
  const count    = items.reduce((s, i) => s + i.qty, 0);

  return (
    <aside className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>Your Order</span>
        {count > 0 && <span className={styles.count}>({count} items)</span>}
      </div>

      {items.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🛒</div>
          <p>Your cart is empty</p>
          <p className={styles.emptySub}>Start adding items!</p>
        </div>
      ) : (
        <>
          <div className={styles.list}>
            {items.map(item => (
              <div key={item.id} className={styles.item}>
                {item.image && (
                  <img className={styles.itemThumb} src={item.image} alt="" width={40} height={40} aria-hidden />
                )}
                <span className={styles.itemName}>{item.name}</span>
                <div className={styles.controls}>
                  <button className={styles.qtyBtn}
                    onClick={() => dispatch(removeItem(item.id))}>−</button>
                  <span className={styles.qty}>{item.qty}</span>
                  <button className={styles.qtyBtn}
                    onClick={() => dispatch(addItem({ ...item }))}>+</button>
                </div>
                <span className={styles.price}>{formatINR(item.price * item.qty)}</span>
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

          <button
            className={styles.checkoutBtn}
            onClick={() => dispatch(openModal('payment'))}
          >
            Checkout — {formatINR(total)}
          </button>
        </>
      )}
    </aside>
  );
};

export default CartPanel;
