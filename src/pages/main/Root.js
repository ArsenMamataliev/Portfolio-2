import React from 'react'
import { BurgerNav } from '../../components/Header/BurgerNav/BurgerNav'
import { Nav } from '../../components/Header/Nav/Nav'
import { Outlet } from 'react-router-dom'
import style from './root.module.scss'

export default function Root() {
  return (
    <div className={style.bgColor}>
      <BurgerNav />
      <Nav />
      <Outlet />
    </div>
  )
}
