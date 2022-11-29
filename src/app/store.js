import { configureStore } from '@reduxjs/toolkit';
import photoSlice from '../features/photoGallery/photoSlice';

export const store = configureStore({
  reducer: {
    photoGallery: photoSlice
  },
});
