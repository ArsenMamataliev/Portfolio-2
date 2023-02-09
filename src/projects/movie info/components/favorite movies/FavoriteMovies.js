import React, { useState, useEffect } from 'react'
import BackToBtn from '../backToBtn/BackToBtn';
import Movie from '../movie/Movie';
import style from './../movie/movies.module.scss' 
import ClearAllIcon from '@mui/icons-material/ClearAll';
import style2 from './favoriteMovies.module.scss'

export default function FavoriteMovies() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('items'));
    if (favorite) {
      setFavorite(favorite);
    }
  }, []);
  const clearFn = () => {
    localStorage.clear()
    window.location.reload();
  }
  return (
    <div className={style2.favoriteContainer}>
      <div className={style2.btnContainer}>
        <BackToBtn />
        <button onClick={clearFn}>
          <ClearAllIcon /> ClearAll
        </button>
      </div>
      <div className={style.moviesContainer}>
        {
          favorite? favorite.map((item) =>{
            return (
              <Movie 
                key={item['imdbID']}
                movie={item}
              />
            )
          }
          ): <p>No favorite movies</p>
        }
      </div>
    </div>
  )
}
