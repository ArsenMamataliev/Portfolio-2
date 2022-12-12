import React from 'react'
import { BurgerNav } from '../../components/Header/BurgerNav/BurgerNav'
import { Nav } from '../../components/Header/Nav/Nav'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <BurgerNav />
      <Nav />
      <Outlet />
    </div>
  )
}
