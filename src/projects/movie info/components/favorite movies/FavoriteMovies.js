import React, { useState, useEffect } from 'react'
import BackToBtn from '../backToBtn/BackToBtn';
import Movie from '../movie/Movie';
import style from './../movie/movies.module.scss' 
import ClearAllIcon from '@mui/icons-material/ClearAll';
import style2 from './favoriteMovies.module.scss'

export default function FavoriteMovies() {
  const favMovie = JSON.parse(localStorage.getItem('moviesLS'));
  const [favorite, setFavorite] = useState(favMovie);

  useEffect(() => {
    if (favorite) {
      setFavorite(favorite);
    }
  }, [favorite]);

  const clearFn = () => {
    localStorage.clear()
    setFavorite();
  }

  const deleteFn = (movie) => {
    const id = movie['imdbID'];
    const res = favMovie.filter(item => item['imdbID'] !== id);
    localStorage.setItem('moviesLS', JSON.stringify(res))
    setFavorite(res);
  }

  return (
    <div className={style2.favoriteContainer}>
      <div className={style2.btnContainer}>
        <BackToBtn />
        <button onClick={clearFn}>
          <ClearAllIcon /> Clear All
        </button>
      </div>
      <div className={style.moviesContainer}>
        {
          favorite ? favorite.map((item) =>{
            return (
              <Movie 
                key={item['imdbID']}
                movie={item}
                deleteFn={deleteFn}
              />
            )
          }
          ): ""
        }
      </div>
    </div>
  )
}
