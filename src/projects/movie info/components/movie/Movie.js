import React from 'react';
import style from './movie.module.scss';
import noPhoto from './../../../../assets/img/no photo.jpg'
import { useDispatch } from 'react-redux';
import { idFn } from '../../../../features/movie info/movieInfo';
import { useNavigate } from "react-router-dom";

export default function Movie({movie}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = movie['imdbID'];
  
  const changeIdFn = () => {
    dispatch(idFn(id));
    navigate("/projects/movie/movie_detail");
  }
  
  return (
    <div 
      className={style.movieContainer}
      onClick={changeIdFn}
    > 
      <img src={movie['Poster'] !== 'N/A'? movie['Poster'] : noPhoto } alt="movie_photo" />  
      <div className={style.description}>
        <p>{movie['Title']}</p>
        <p>{movie['Year']}</p>
      </div> 
    </div>
  )
}
