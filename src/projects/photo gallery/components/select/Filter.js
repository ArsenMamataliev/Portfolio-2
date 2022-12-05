import React from 'react'
import Orientation from './Orientation'
import style from './select.module.scss'
import Color from './Color'
import Limit from './Limit'
import OrderBy from './OrderBy'
import { useSelector } from 'react-redux'

export default function Filter() {
  const visiblity = useSelector((state) => state.filterBoxSlice.visiblity);

  return (
    <div className={style.selectBox}>
        { visiblity &&
          <>
          <Orientation title = {"Orientation"} value = {["landscape", "portrait", "squarish"]} />
          <Color title = {"Color"} value = {["black", "white", "yellow", "orange", "red", "purple", "magenta", "green", "teal", "blue"]} />
          <Limit title = {"Limit"} value = {[5, 10, 15, 20]} />
          <OrderBy title = {"Order by"} value = {["relevant", "latest"]} />
          </>
        }
    </div>
  )
}
