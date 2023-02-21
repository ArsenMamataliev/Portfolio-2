import React, {useState, useEffect } from 'react'
import Movie from './Movie'
import { useDispatch, useSelector } from 'react-redux';
import { favoriteStatusFn, selectValues } from '../../../../features/movie info/movieInfo';
import style from './movies.module.scss';

export default function Movies() {
  const [moviesLS, setMoviesLS] = useState([]);
  const select = useSelector(selectValues);
  const dispatch = useDispatch();

  const setToLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  useEffect(() => {
    const moviesFromLS = JSON.parse(localStorage.getItem('moviesLS'));
    if(moviesFromLS === null && moviesLS.length === 0){
      setToLS('moviesLS', moviesLS)
    }else if(moviesFromLS.length >= 1 && moviesLS.length === 0){
      setMoviesLS(moviesFromLS);
      setToLS('moviesLS', moviesLS)
    }
    setToLS('moviesLS', moviesLS)
  }, [moviesLS]);

  const saveToLS = (movie) => {
    const id = movie['imdbID'];
    const itemsFromLs = JSON.parse(localStorage.getItem('moviesLS'));
    const movieExist = itemsFromLs.map(item => item['imdbID'] === id).includes(true);
    if(!movieExist){
      setMoviesLS([...moviesLS, movie]);
      dispatch(favoriteStatusFn())
    }
  }

  return (
    <div className={style.moviesContainer}>
      {
        select.movies? select.movies.map((item) => {
          return (
            <Movie 
              key={item['imdbID']}
              movie={item}
              saveToLS={saveToLS}
            />
          )
        }
        ): <p>No {select.type} found</p>
      }
    </div>
  )
}
