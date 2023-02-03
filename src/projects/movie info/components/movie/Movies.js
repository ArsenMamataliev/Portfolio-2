import React from 'react'
import Movie from './Movie'
import { useSelector } from 'react-redux';
import { selectValues } from '../../../../features/movie info/movieInfo';
import style from './movies.module.scss';

export default function Movies() {
  const select = useSelector(selectValues);
  return (
    <div className={style.moviesContainer}>
      {
        select.movies? select.movies.map((item) =>{
          return (
            <Movie 
              key={item['imdbID']}
              movie={item} 
            />
          )
        }
        ): <p>No movies found</p>
      }
    </div>
  )
}
