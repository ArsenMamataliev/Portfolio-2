import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import style from './loader.module.scss'

export default function Loader() {
  return (
    <div className={style.loaderBox}>
        <InfinitySpin 
            width='100'
            color="#010E21"
        />
    </div>
  )
}
