import { configureStore } from '@reduxjs/toolkit';
import { galleryDataSlice } from './galleryData/galleryDataSlice';
import { modalWindowSlice } from './modalWindow/modalWindowSlice';

export const store = configureStore({
  reducer: {
    galleryData: galleryDataSlice.reducer,
    modal: modalWindowSlice.reducer,
  },
});
