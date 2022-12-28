import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { queryFn } from '../../../../features/photoGallery/photoSlice';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
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
        <SearchRoundedIcon color='primary' />
        <input
          type="text"
          placeholder='Searching...'
          value={word}
          onChange = {setWordFn}
          />
    </div>
  )
}
