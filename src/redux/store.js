import { configureStore } from '@reduxjs/toolkit';
import cartReducer    from './slices/cartSlice';
import authReducer    from './slices/authSlice';
import uiReducer      from './slices/uiSlice';
import filterReducer  from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    cart:   cartReducer,
    auth:   authReducer,
    ui:     uiReducer,
    filter: filterReducer,
  },
});

export default store;
