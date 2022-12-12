import {createSlice } from '@reduxjs/toolkit';

const initialState = {
 visiblity: false
};

export const filterSlice = createSlice({
  name: 'photoGallery',
  initialState,
  reducers: {
    toogleFn: (state) => {
      state.visiblity = !state.visiblity;
    }
 }
});

export const { toogleFn } = filterSlice.actions;

export default filterSlice.reducer;