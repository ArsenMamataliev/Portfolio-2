import { configureStore } from '@reduxjs/toolkit';
import photoSlice from '../features/photoGallery/photoSlice';
import filterBoxSlice from '../features/photoGallery/filterBoxSlice';

export const store = configureStore({
  reducer: {
    photoGallery: photoSlice, 
    filterBoxSlice,
  }
});
