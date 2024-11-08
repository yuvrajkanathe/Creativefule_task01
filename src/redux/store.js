import { configureStore } from '@reduxjs/toolkit';
import instagramPagesReducer from './instagramPagesSlice';

const store = configureStore({
  reducer: {
    instagramPages: instagramPagesReducer,
  },
});

export default store;
