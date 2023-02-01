import React from 'react';
import style from './movie.module.scss';

export default function Movie({movie}) {
    console.log(movie);
  return (
    <div className={style.movieContainer}>
        <img src={movie['Poster']} alt="movie_photo" />
        <div>
            <p>{movie['Title']}</p>
            <p>{movie['Year']}</p>
            <p>ID: {movie['imdbID']}</p>
        </div> 
    </div>
  )
}
