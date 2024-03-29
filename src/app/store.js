import { configureStore } from '@reduxjs/toolkit';
import reducers from '../redux/reducers';

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production', // Enabling Redux DevTools Extension conditionally
});
