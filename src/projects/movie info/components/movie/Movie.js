import React, { useState, useEffect } from 'react';
import style from './movie.module.scss';
import noPhoto from './../../../../assets/img/no photo.jpg'
import { useDispatch } from 'react-redux';
import { idFn } from '../../../../features/movie info/movieInfo';
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tilt from 'react-parallax-tilt';

export default function Movie({movie}) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = movie['imdbID'];
  
  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(data));
  }, [data]);

  const changeIdFn = () => {
    dispatch(idFn(id));
    navigate("/projects/movie/movie_detail");
  }

  return (
    <Tilt>
      <div className={style.movieContainer}> 
        <img src={movie['Poster'] !== 'N/A'? movie['Poster'] : noPhoto } 
          alt="movie_photo" 
          onClick={changeIdFn}
        />  
        <div className={style.description}>
          <p>{movie['Title']}</p>
          <p>{movie['Year']}</p> 
        </div>
        <div 
          className={style.favorite}
          onClick={()=>setData(movie)}
        >
          <FavoriteIcon color='error'/>
        </div>
      </div>
    </Tilt>  
  )
}
