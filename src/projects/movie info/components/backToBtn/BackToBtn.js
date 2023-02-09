import React from 'react'
import { Link } from 'react-router-dom'
import style from './backToBtn.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackToBtn() {
  return (
    <div className={style.linkContainer}>
        <Link 
          className={style.link} 
          to='/projects/movie/movie_list'
        >
          <ArrowBackIcon/> Movie list
        </Link>
    </div>
  )
}
