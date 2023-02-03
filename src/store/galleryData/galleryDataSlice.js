import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  date: '',
  images: [],
};

export const galleryDataSlice = createSlice({
  name: 'galleryData',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { setPage, setDate, setImages } = galleryDataSlice.actions;

export default galleryDataSlice.reducer;
