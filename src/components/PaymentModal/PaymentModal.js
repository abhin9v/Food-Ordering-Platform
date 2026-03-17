import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModals, closeModal, openModal, setLastOrderId } from '../../redux/slices/uiSlice';
import { selectCartTotals } from '../../redux/slices/cartSlice';
import { selectUser } from '../../redux/slices/authSlice';
import { clearCart } from '../../redux/slices/cartSlice';
import { showToast } from '../../redux/slices/uiSlice';
import { openRazorpayCheckout, generateOrderId } from '../../utils/razorpay';
import formatINR from '../../utils/formatCurrency';
import styles from './PaymentModal.module.css';

const PAYMENT_METHODS = [
  { id: 'upi',        icon: '📱', label: 'UPI / GPay / PhonePe', sub: 'Instant payment, no charges' },
  { id: 'card',       icon: '💳', label: 'Credit / Debit Card',  sub: 'Visa, Mastercard, Rupay' },
  { id: 'netbanking', icon: '🏦', label: 'Net Banking',          sub: 'All major banks supported' },
  { id: 'cod',        icon: '💵', label: 'Cash on Delivery',     sub: 'Pay when food arrives' },
];

const PaymentModal = () => {
  const dispatch = useDispatch();
  const modals   = useSelector(selectModals);
  const { subtotal, delivery, gst, total } = useSelector(selectCartTotals);
  const user     = useSelector(selectUser);

  const [selected,    setSelected]    = useState('upi');
  const [processing,  setProcessing]  = useState(false);

  if (!modals.payment) return null;

  const handlePay = async () => {
    setProcessing(true);

    if (selected === 'cod') {
      // Simulate COD confirmation
      setTimeout(() => finalize(generateOrderId()), 1200);
      return;
    }

    // Razorpay flow (UPI / card / netbanking)
    await openRazorpayCheckout({
      amount:      total,
      name:        user?.name  || 'Guest',
      email:       user?.email || 'guest@feastflow.com',
      description: `FeastFlow Order — ${formatINR(total)}`,
      onSuccess:   (paymentId) => finalize(paymentId),
      onFailure:   (err) => {
        setProcessing(false);
        dispatch(showToast({ message: `Payment failed: ${err}`, type: 'error' }));
      },
    });
  };

  const finalize = (orderId) => {
    dispatch(setLastOrderId(orderId));
    dispatch(clearCart());
    dispatch(closeModal('payment'));
    dispatch(openModal('success'));
    setProcessing(false);
  };

  return (
    <div className={styles.overlay}
      onClick={e => e.target === e.currentTarget && !processing && dispatch(closeModal('payment'))}>
      <div className={styles.modal}>
        {!processing && (
          <button className={styles.close} onClick={() => dispatch(closeModal('payment'))}>✕</button>
        )}
        <h2 className={styles.title}>Payment</h2>
        <p className={styles.sub}>Choose your payment method</p>

        {/* Razorpay badge */}
        <div className={styles.rpBadge}>
          🔒 Secured by <strong>Razorpay</strong> — PCI DSS Level 1 Certified
        </div>

        {/* Order summary */}
        <div className={styles.summary}>
          <div className={styles.summaryTitle}>Order Summary</div>
          <div className={styles.summaryRow}><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
          <div className={styles.summaryRow}><span>Delivery</span><span>{formatINR(delivery)}</span></div>
          <div className={styles.summaryRow}><span>GST (5%)</span><span>{formatINR(gst)}</span></div>
          <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
            <span>Total</span><span>{formatINR(total)}</span>
          </div>
        </div>

        {/* Payment methods */}
        {PAYMENT_METHODS.map(m => (
          <div
            key={m.id}
            className={`${styles.method} ${selected === m.id ? styles.methodSelected : ''}`}
            onClick={() => !processing && setSelected(m.id)}
          >
            <input type="radio" name="payment" readOnly checked={selected === m.id} />
            <span className={styles.methodIcon}>{m.icon}</span>
            <div>
              <div className={styles.methodLabel}>{m.label}</div>
              <div className={styles.methodSub}>{m.sub}</div>
            </div>
          </div>
        ))}

        <button
          className={styles.payBtn}
          onClick={handlePay}
          disabled={processing}
        >
          {processing ? '⏳ Processing…' : `Pay ${formatINR(total)} 🔒`}
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
