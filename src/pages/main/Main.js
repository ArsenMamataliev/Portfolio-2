import React from 'react'
import { AboutMe } from '../../components/AboutMe/AboutMe'
import { BurgerNav } from '../../components/Header/BurgerNav/BurgerNav'
import { Nav } from '../../components/Header/Nav/Nav'
import ScrollUp from '../../components/scrollup/ScrollUp'
import Skills from '../../components/Skills/Skills'

export default function Main() {
  return (
    <div>
        <Nav/>
        <BurgerNav />
        <AboutMe />
        <Skills />
        <ScrollUp loaderColor={'#006B6C'}/>
    </div>
  )
}
