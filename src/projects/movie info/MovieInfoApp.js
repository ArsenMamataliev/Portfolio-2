import React, { useEffect } from 'react';
import axios from 'axios';
import style from './movieInfoApp.module.scss';
import { useDispatch,  useSelector } from 'react-redux';
import { moviesFn, selectValues, totalMoviesFn } from '../../features/movie info/movieInfo';
import { Outlet } from 'react-router-dom';


export default function MovieInfoApp() {
  const dispatch = useDispatch();
  const movie = useSelector(selectValues);
  
    useEffect(()=>{
      axios.get(`http://www.omdbapi.com/?s=${movie.name}&page=${movie.page}&plot=${movie.plot}&apikey=${movie.api_key}`)
        .then((response)=> {
          dispatch(moviesFn(response.data['Search']));
          dispatch(totalMoviesFn(response.data.totalResults));
          console.log(response.data);
      });
    }, [movie.name, movie.page, movie.plot, movie.id, movie.api_key, dispatch ])
    
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
      <Outlet />
      </div>
    </div>
  )
}
