import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/slices/cartSlice';
import authReducer from './components/slices/authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});