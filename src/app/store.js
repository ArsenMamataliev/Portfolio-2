import { configureStore } from '@reduxjs/toolkit';
import photoSlice from '../features/photoGallery/photoSlice';
import filterBoxSlice from '../features/photoGallery/filterBoxSlice';
import paginationSlice from '../features/photoGallery/paginationSlice';

export const store = configureStore({
  reducer: {
    photoGallery: photoSlice, 
    filterBoxSlice,
    paginationSlice
  }
});
