import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: 'all',
    searchQuery: '',
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    resetFilters(state) {
      state.category    = 'all';
      state.searchQuery = '';
    },
  },
});

export const selectCategory    = state => state.filter.category;
export const selectSearchQuery = state => state.filter.searchQuery;

export const { setCategory, setSearchQuery, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
