import React from 'react'
import style from './photos.module.scss' 

export default function Photos({photo}) {
  return (
    <div className={style.photos}>
      <img className={style.img} src={photo.urls.regular} alt="photos" />
    </div>
  );
}

