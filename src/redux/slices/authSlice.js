import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,   // { name, email }
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    signup(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const selectUser      = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
