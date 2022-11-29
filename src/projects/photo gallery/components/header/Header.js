import React from 'react'
import style from './header.module.scss'
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import Filter from '../select/Filter.js';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useSelector } from 'react-redux';
import { selectValues } from '../../../../features/photoGallery/photoSlice';


export default function Header() {
    const item = useSelector(selectValues)
  return (
    <div className={style.container}>
        <div>
            <MonochromePhotosIcon color='primary'/> : {item.totalPhotos}
        </div>
        <div>
            <Filter />
        </div>
        <div>
            <AutoStoriesIcon color='primary'/> : {item.page} / {item.totalPages} 
        </div>
    </div>
  )
}
