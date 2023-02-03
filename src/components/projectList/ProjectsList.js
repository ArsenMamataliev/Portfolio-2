import React from 'react'
import { BurgerNav } from '../Header/BurgerNav/BurgerNav'
import { Nav } from '../Header/Nav/Nav'
import { MyWorks } from '../MyWorks/MyWorks'
import ScrollUp from '../scrollup/ScrollUp'

export default function ProjectsList() {
  return (
    <div>
        <Nav />
        <BurgerNav />
        <MyWorks />
        <ScrollUp loaderColor={'#006B6C'} />
    </div>
  )
}
