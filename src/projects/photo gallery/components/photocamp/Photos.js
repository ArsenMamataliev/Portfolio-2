import React from 'react'
import style from './photos.module.scss' 
import PersonIcon from '@mui/icons-material/Person'
import DescriptionIcon from '@mui/icons-material/Description'
import Features from '../features/Features'

export default function Photos({photo}) {
  return (
    <div className={style.photos}>
      <div className={style.modal}>
        <div className={style.description}>
          <p><DescriptionIcon /> {photo.alt_description}</p>
          <p><PersonIcon /> {photo.user.username}</p>
        </div>
        <Features photo={photo} />
      </div>
      <img className={style.img} src={photo.urls.small} alt="photos" />
    </div>
  );
}

