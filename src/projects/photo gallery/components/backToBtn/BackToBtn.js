import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import style from './backToBtn.module.scss';

export default function BackToBtn() {
  return (
    <div className={style.btnContainer}>
        <Link 
          className={style.link}
          to="/projects/list"
          > 
          <ArrowBackIcon />
        </Link>
    </div>
  )
}
