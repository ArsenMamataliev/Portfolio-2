import React, {useState, useEffect } from 'react'
import Movie from './Movie'
import { useDispatch, useSelector } from 'react-redux';
import { selectValues, favoriteMoviesFn } from '../../../../features/movie info/movieInfo';
import style from './movies.module.scss';

export default function Movies() {
  const select = useSelector(selectValues);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsFromLs = JSON.parse(localStorage.getItem('items'));
    if(itemsFromLs === null && items.length === 0){
      localStorage.setItem('items', JSON.stringify(items));
    }else if(itemsFromLs.length >= 1 && items.length === 0){
      setItems(itemsFromLs);
      localStorage.setItem('items', JSON.stringify(items));
    }
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const saveToLS = (movie) => {
    const id = movie['imdbID'];
    const itemsFromLs = JSON.parse(localStorage.getItem('items'));
    const movieExist = itemsFromLs.map(item => item['imdbID'] === id).includes(true);
    if(!movieExist){
      setItems([...items, movie]);
    }
  }

  return (
    <div className={style.moviesContainer}>
      {
        select.movies? select.movies.map((item) =>{
          return (
            <Movie 
              key={item['imdbID']}
              movie={item}
              saveToLS={saveToLS}
            />
          )
        }
        ): <p>No movies found</p>
      }
    </div>
  )
}
