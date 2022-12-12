import React from 'react'
import style from './bookingApp.module.scss'
import { Link } from 'react-router-dom'

export default function BookingApp() {
  return (
    <div className={style.container}>
        Sorry, in development process
        <Link to="/projects/list">Go back</Link>
    </div>
  )
}
