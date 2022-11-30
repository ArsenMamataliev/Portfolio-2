import React from 'react'
import { BurgerNav } from '../../components/Header/BurgerNav/BurgerNav'
import { Nav } from '../../components/Header/Nav/Nav'
import { MyWorks } from '../../components/MyWorks/MyWorks'

export default function Projects() {
  return (
    <div>
      <Nav />
      <BurgerNav />
      <MyWorks />
    </div>
  )
}
