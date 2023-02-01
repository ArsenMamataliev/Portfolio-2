import React from 'react'
import Movie from './Movie'
import { useSelector } from 'react-redux';
import { selectValues } from '../../../../features/movie info/photoInfo';
import style from './movieList.module.scss';

export default function MovieList() {
  const select = useSelector(selectValues);

  return (
    <div className={style.movieListContainer}>
      {
        select.movies.length !== 0 ? select.movies.map((item) =>{
          return (
            <Movie  
              key={item['imdbID']}
              movie={item} 
            />
          )
        }
        ) :<p>no movies</p>
      }
    </div>
  )
}
