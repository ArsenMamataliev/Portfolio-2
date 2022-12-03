import React from 'react'
import { Rings } from 'react-loader-spinner'
import style from './loader.module.scss'


export default function Loader() {
  return (
    <div className={style.loaderBox}>
        <Rings
            height="80"
            width="80"
            color="blue"
            radius="12"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
        />
    </div>
  )
}
