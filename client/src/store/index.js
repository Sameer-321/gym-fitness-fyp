import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import cartSlice from './cart';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
