import React from 'react'
import style from './pageInfo.module.scss'
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useSelector } from 'react-redux';
import { selectValues } from '../../../../features/photoGallery/photoSlice';


export default function Header() {
    const item = useSelector(selectValues);

  return (
    <div className={style.container}>
        <div><MonochromePhotosIcon color='primary'/> : {item.totalPhotos}</div>
        <div><AutoStoriesIcon color='primary'/> : {item.page > 0 ? item.page : 0} / {item.totalPages}</div>
    </div>
  )
}
