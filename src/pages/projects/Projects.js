import React from 'react'
import { Link } from 'react-router-dom'
import { BurgerNav } from '../../components/Header/BurgerNav/BurgerNav'
import { projectPages } from '../../components/Header/constants'
import { Nav } from '../../components/Header/Nav/Nav'

export default function Projects() {
  return (
    <div>
      <Nav />
      <BurgerNav />
      <div> 
        {
          projectPages.map(project => 
            <li>
               <Link  to={project.link}>{project.title}</Link>
            </li>
        )
        }
      </div>
    </div>
  )
}
