import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './projects.module.scss'

export default function Projects() {
  return (
    <div className={style.bgColor}>
      <Outlet />
    </div>
  )
}
