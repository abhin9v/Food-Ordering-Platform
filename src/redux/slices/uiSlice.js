import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    modals: {
      login:   false,
      signup:  false,
      cart:    false,
      payment: false,
      success: false,
    },
    toast: {
      message: '',
      type: '',   // 'success' | 'error' | ''
      visible: false,
    },
    lastOrderId: '',
  },
  reducers: {
    openModal(state, action) {
      // Close all first, then open requested
      Object.keys(state.modals).forEach(k => { state.modals[k] = false; });
      state.modals[action.payload] = true;
    },
    closeModal(state, action) {
      state.modals[action.payload] = false;
    },
    closeAllModals(state) {
      Object.keys(state.modals).forEach(k => { state.modals[k] = false; });
    },
    showToast(state, action) {
      state.toast = { message: action.payload.message, type: action.payload.type || '', visible: true };
    },
    hideToast(state) {
      state.toast.visible = false;
    },
    setLastOrderId(state, action) {
      state.lastOrderId = action.payload;
    },
  },
});

export const selectModals    = state => state.ui.modals;
export const selectToast     = state => state.ui.toast;
export const selectLastOrder = state => state.ui.lastOrderId;

export const {
  openModal, closeModal, closeAllModals,
  showToast, hideToast,
  setLastOrderId,
} = uiSlice.actions;
export default uiSlice.reducer;
