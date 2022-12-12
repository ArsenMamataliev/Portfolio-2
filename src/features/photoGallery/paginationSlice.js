import {createSlice } from '@reduxjs/toolkit';

const initialState = {
 data: false
};

export const paginationSlice = createSlice({
  name: 'photoGallery',
  initialState,
  reducers: {
    pageToogleFn: (state) => {
      state.data = !state.data;
    }
 }
});

export const { pageToogleFn } = paginationSlice.actions;

export default paginationSlice.reducer;