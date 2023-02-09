import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieNameFn, selectValues } from '../../../../features/movie info/movieInfo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import style from './searchBar.module.scss'
import { Link } from 'react-router-dom'

export default function SearchBar() {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const dispatch = useDispatch();
  const movie = useSelector(selectValues);

  useEffect(() => {
    const favoriteCount = JSON.parse(localStorage.getItem('items'));
    setFavoriteCount(favoriteCount ? favoriteCount.length : 0);
  }, []);

  const movieName= (e) => {
    dispatch(movieNameFn(e.target.value));
  };

  return (
    <div className={style.searchContainer}>
        <p>Movie DB</p>
        <div>
          <input 
            type='text'
            placeholder='Movie name'
            value={movie.name}
            onChange={movieName}
          />
          <Link 
            className={style.link}
            to='/projects/movie/favorite_movie'
          >
            <Badge badgeContent={movie.favoriteMovies}>
              <FavoriteIcon />
            </Badge>
          </Link>
        </div> 
    </div>
  )
}
