import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenModal: false,
  currentImage: 0,
};

export const modalWindowSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },
  },
});

export const { setIsOpenModal, setCurrentImage } = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
