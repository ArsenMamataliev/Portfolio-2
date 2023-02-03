import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieNameFn, selectValues } from '../../../../features/movie info/movieInfo';
import style from './searchBar.module.scss'

export default function SearchBar() {
  const dispatch = useDispatch();
  const movie = useSelector(selectValues);

  const movieName= (e) => dispatch(movieNameFn(e.target.value));
  return (
    <div className={style.searchContainer}>
        <p>OMDB</p>
        <input 
          type='text'
          placeholder='Movie name'
          value={movie.name}
          onChange={movieName}
        />
    </div>
  )
}
