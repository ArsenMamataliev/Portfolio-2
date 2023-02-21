import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectValues, typeFn } from '../../../../features/movie info/movieInfo';
import style from './filterBtn.module.scss'

export default function FilterBtn() {
    const type = ['movie', 'series', 'episode'];
    const dispatch = useDispatch();
    const movie = useSelector(selectValues)
  return (
    <div className={style.filterContainer}>
        {
            type.map((item, index) => 
                <button
                    key={index}
                    onClick={()=> dispatch(typeFn(item))}
                    className={movie.type === item && style.active}
                >
                    {item}
                </button>
                )
        }  
    </div>
  )
}
