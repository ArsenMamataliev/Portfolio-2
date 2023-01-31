import React, {useState} from 'react'
import style from './searchBar.module.scss'

export default function SearchBar() {
  const [movieName, setMovieName] = useState('');

  const movieNameFn = (e) => setMovieName(e.target.value);
  return (
    <div className={style.searchContainer}>
        <p>OMDB</p>
        <input 
          type='text'
          placeholder='Movie name'
          defaultValue='avengers'
          onChange={movieNameFn}
        />
    </div>
  )
}
