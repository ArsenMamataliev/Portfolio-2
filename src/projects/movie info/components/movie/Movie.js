import React from 'react';
import style from './movie.module.scss';
import noPhoto from './../../../../assets/img/no photo.jpg'
import { useDispatch } from 'react-redux';
import { idFn } from '../../../../features/movie info/movieInfo';
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Movie({movie, saveToLS, deleteFn}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = movie['imdbID'];
  const pathName = window.location.pathname;

  const changeIdFn = () => {
    dispatch(idFn(id));
    navigate("/projects/movie/movie_detail");
  }

  return (
    
      <div className={style.movieContainer}> 
        <img src={movie['Poster'] !== 'N/A'? movie['Poster'] : noPhoto } 
          alt="movie_photo" 
          onClick={changeIdFn}
        />  
        <div className={style.description}>
          <p>{movie['Title']}</p>
          <p>{movie['Year']}</p> 
        </div>
        {
          pathName !== "/projects/movie/favorite_movie" ?
          <div 
            className={style.icons}
            onClick={() => saveToLS(movie)}
          >
           <FavoriteIcon/>
          </div> :
          <div 
            className={style.icons}
            onClick={() => deleteFn(movie)}
          >
          <DeleteIcon />
          </div>
        }
      </div>  
  )
}
