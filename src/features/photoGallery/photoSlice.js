import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: "nature",
  orientation: "landscape",
  color: "black",
  limit: 20,
  orderBy: "latest",
  page: 1, 
  totalPages: 0,
  totalPhotos: 0
};

export const counterSlice = createSlice({
  name: 'photoGallery',
  initialState,
  reducers: {
    queryFn: (state, action) => {
      state.query = action.payload;
    },
    orientationFn: (state, action) => {
      state.orientation = action.payload;
    },
    colorFn: (state, action) => {
      state.color = action.payload;
    },
    limitFn: (state, action) => {
      state.limit = action.payload;
    },
    orderByFn: (state, action) => {
      state.orderBy = action.payload;
    },
    pageFn: (state, action) => {
      state.page = action.payload;
    },
    totalPhotosFn: (state, action) => {
      state.totalPhotos = action.payload;
    },
    totalPagesFn: (state, action) => {
      state.totalPages = action.payload;
    }
  }
});

export const { queryFn, orientationFn, colorFn, limitFn, orderByFn, pageFn, totalPhotosFn, totalPagesFn } = counterSlice.actions;

export const selectValues = (state) => state.photoGallery;

export default counterSlice.reducer;
