/**
 * Razorpay Payment Gateway Integration
 *
 * In production, replace the key_id with your live Razorpay key
 * and wire up the backend order-creation endpoint.
 *
 * Backend flow (Node/Express example):
 *  1. POST /api/orders  → Razorpay.orders.create({ amount, currency })
 *  2. Return { orderId, amount, currency, key }
 *  3. Frontend opens Razorpay checkout with returned orderId
 *  4. On success, POST /api/payment/verify → validate signature
 */

export const RAZORPAY_KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_XXXXXXXXXXXXXX';

/**
 * Dynamically load the Razorpay checkout script.
 * Returns a promise that resolves to true when the script is ready.
 */
export const loadRazorpayScript = () =>
  new Promise(resolve => {
    if (window.Razorpay) { resolve(true); return; }
    const script    = document.createElement('script');
    script.src      = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload   = () => resolve(true);
    script.onerror  = () => resolve(false);
    document.body.appendChild(script);
  });

/**
 * Open the Razorpay payment modal.
 * @param {Object} options
 * @param {number}   options.amount        – total in rupees (converted to paise internally)
 * @param {string}   options.name          – user's name
 * @param {string}   options.email         – user's email
 * @param {string}   options.description   – order description
 * @param {Function} options.onSuccess     – called with paymentId on success
 * @param {Function} options.onFailure     – called on failure/dismiss
 */
export const openRazorpayCheckout = async ({
  amount,
  name,
  email,
  description = 'FeastFlow Order',
  onSuccess,
  onFailure,
}) => {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    onFailure?.('Failed to load Razorpay SDK');
    return;
  }

  const options = {
    key:         RAZORPAY_KEY_ID,
    amount:      amount * 100,   // paise
    currency:    'INR',
    name:        'FeastFlow',
    description,
    image:       '/logo192.png',
    prefill: { name, email, contact: '' },
    theme: { color: '#ff6b35' },
    modal: { backdropclose: false },
    handler(response) {
      onSuccess?.(response.razorpay_payment_id);
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.on('payment.failed', () => onFailure?.('Payment failed'));
  rzp.open();
};

/**
 * Generate a mock order ID for demo / COD flows.
 */
export const generateOrderId = () =>
  'FF' + Date.now().toString().slice(-8).toUpperCase();
