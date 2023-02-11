import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  api_key: '7a917a90',
  movies: [],
  name: 'alone',
  plot: 'full',
  page: 1, 
  totalMovies: 0,
  favoriteCount: 0,
  favoriteStatus: false
  
};

export const movieSlice = createSlice({
  name: 'movieInfo',
  initialState,
  reducers: {
    movieNameFn: (state, action) => {
      state.name = action.payload;
    },
    moviesFn: (state, action) => {
        state.movies = action.payload;
    },
    pageFn: (state, action) => {
      state.page = action.payload;
    },
    idFn: (state, action) => {
      state.id = action.payload;
    },
    plotFn: (state, action) => {
      state.plot = action.payload;
    },
    totalMoviesFn: (state, action) => {
      state.totalMovies = action.payload;
    },
    favoriteMoviesFn: (state, action) => {
      state.favorite = JSON.parse(localStorage.getItem('moviesLS')).length;
    },
    favoriteStatusFn: (state, action) => {
      state.favoriteStatus = !action.payload;
    }
  }
});

export const { movieNameFn, moviesFn, pageFn, totalMoviesFn, plotFn, idFn, favoriteMoviesFn, favoriteStatusFn } = movieSlice.actions;

export const selectValues = (state) => state.movieInfo;

export default movieSlice.reducer;
