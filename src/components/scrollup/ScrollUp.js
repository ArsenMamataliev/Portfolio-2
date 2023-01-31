import React from 'react'
import ScrollToTop from 'react-scroll-up'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import style from './scrollUp.module.scss';

export default function ScrollUp() {
  return (
    <div>
        <ScrollToTop showUnder={160}>
            <ArrowCircleUpIcon  
              className={style.upIcon}
              fontSize='large'  
            />
        </ScrollToTop>
    </div>
  )
}
