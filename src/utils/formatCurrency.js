/**
 * Format a number as Indian Rupees.
 * e.g. formatINR(1299) → '₹1,299'
 */
export const formatINR = (amount) =>
  '₹' + new Intl.NumberFormat('en-IN').format(amount);

export default formatINR;
