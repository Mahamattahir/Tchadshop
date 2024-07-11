// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item) {
        state.items.push(action.payload);
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    resetCart(state) {
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
