import React, { useEffect, Suspense } from 'react';
import axios from 'axios';
import style from './movieInfoApp.module.scss';
import SearchBar from './components/haeder/SearchBar';
import { useDispatch,  useSelector } from 'react-redux';
import { moviesFn, selectValues, totalMoviesFn } from '../../features/movie info/photoInfo';


export default function MovieInfoApp() {
  const dispatch = useDispatch();
  const movie = useSelector(selectValues);
  const api_key = '7a917a90';

    useEffect(()=>{
      axios.get(`http://www.omdbapi.com/?s=${movie.name}&page=${movie.page}&plot=${movie.plot}&apikey=${api_key}`)
        .then((response)=> {
          dispatch(moviesFn(response.data['Search']));
          dispatch(totalMoviesFn(response.data.totalResults));
          console.log(response.data);
      });
    }, [movie.name, movie.page, movie.plot, dispatch ])
    
    const MovieList = React.lazy(() => import('./components/movie/MovieList'));
  return (
    <div className={style.wrapper}>
      <SearchBar />
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList /> 
      </Suspense>
      
    </div>
  )
}
