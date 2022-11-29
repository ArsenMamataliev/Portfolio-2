import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { queryFn } from '../../../../features/photoGallery/photoSlice';
import style from "./search.module.scss"

export default function Search() {
  const [word, setWord] = useState('');
  const dispatch = useDispatch();

  const setWordFn = e => {
    dispatch(queryFn(e.target.value))
    setWord(e.target.value);
  }
  
  return (
    <div className={style.searchBox}>
        <input 
          type="text"
          placeholder='Please type a word'
          value={word}
          onChange = {setWordFn}
          />
    </div>
  )
}
