import React from 'react'
import { AboutMe } from '../../components/AboutMe/AboutMe'
import { BurgerNav } from '../../components/Header/BurgerNav/BurgerNav'
import { Nav } from '../../components/Header/Nav/Nav'

export default function Main() {
  return (
    <div>
        <Nav/>
        <BurgerNav />
        <AboutMe />
    </div>
  )
}
