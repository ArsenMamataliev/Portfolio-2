import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieNameFn, selectValues } from '../../../../features/movie info/movieInfo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import style from './searchBar.module.scss'
import { Link } from 'react-router-dom'

export default function SearchBar() {
  const dispatch = useDispatch();
  const movie = useSelector(selectValues);

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
          <Link to='/projects/movie/favorite_movie'>
            <Badge badgeContent={4}>
              <FavoriteIcon />
            </Badge>
          </Link>
        </div> 
    </div>
  )
}
