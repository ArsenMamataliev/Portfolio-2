import React from 'react'
import style from './bookingApp.module.scss'
import { Link } from 'react-router-dom'
import Search from './component/serach/Search'

export default function BookingApp() {
  return (
    <div className={style.container}>
        Sorry, in development process
        <Link to="/projects/list">Go back</Link>
        <Search />
    </div>
  )
}
