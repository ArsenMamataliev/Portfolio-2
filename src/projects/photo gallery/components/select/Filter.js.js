import React from 'react'
import Orientation from './Orientation'
import style from './select.module.scss'
import Color from './Color'
import Limit from './Limit'
import OrderBy from './OrderBy'

export default function Filter() {
  return (
    <div className={style.selectBox}>
        <Orientation title = {"Orientation"} value = {["landscape", "portrait", "squarish"]} />
        <Color title = {"Color"} value = {["black", "white", "yellow", "orange", "red", "purple", "magenta", "green", "teal", "blue"]} />
        <Limit title = {"Limit"} value = {[5, 10, 15, 20]} />
        <OrderBy title = {"Order by"} value = {["relevant", "latest"]} />
    </div>
  )
}
