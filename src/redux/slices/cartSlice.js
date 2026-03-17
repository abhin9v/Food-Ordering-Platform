import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],          // [{ id, name, price, qty, restaurantId }]
    restaurantId: null, // enforce single-restaurant ordering
  },
  reducers: {
    addItem(state, action) {
      const { id, name, price, restaurantId } = action.payload;

      // If adding from a different restaurant, clear the cart first
      if (state.restaurantId && state.restaurantId !== restaurantId) {
        state.items = [];
      }
      state.restaurantId = restaurantId;

      const existing = state.items.find(i => i.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ id, name, price, qty: 1, restaurantId });
      }
    },

    removeItem(state, action) {
      const existing = state.items.find(i => i.id === action.payload);
      if (existing) {
        if (existing.qty > 1) {
          existing.qty -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
      if (state.items.length === 0) state.restaurantId = null;
    },

    deleteItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      if (state.items.length === 0) state.restaurantId = null;
    },

    clearCart(state) {
      state.items = [];
      state.restaurantId = null;
    },
  },
});

// ── Selectors ──────────────────────────────────────────────
export const selectCartItems      = state => state.cart.items;
export const selectCartCount      = state => state.cart.items.reduce((s, i) => s + i.qty, 0);
export const selectCartRestaurant = state => state.cart.restaurantId;

export const selectCartTotals = state => {
  const subtotal = state.cart.items.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal > 0 ? 49 : 0;
  const gst      = Math.round(subtotal * 0.05);
  const total    = subtotal + delivery + gst;
  return { subtotal, delivery, gst, total };
};

export const selectItemQty = (itemId) => state =>
  state.cart.items.find(i => i.id === itemId)?.qty ?? 0;

export const { addItem, removeItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
