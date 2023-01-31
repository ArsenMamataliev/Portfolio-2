import React from 'react'
import style from './bookingApp.module.scss'
import { Link } from 'react-router-dom'
import Search from './component/serach/Search'
import { Input } from '@mui/material';
import axios from 'axios';

export default function BookingApp() {
  const option = {
    method: 'GET',
    url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    params: {term: 'bojack', country: 'uk'},
    headers: {
      'X-RapidAPI-Key': '498337f0c2msh5f5cca063d5d52ap118461jsn0cf85dc3777f',
      'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
  };
  
  axios.request(option).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className={style.container}>
        Sorry, in development process
        <Link to="/projects/list">Go back</Link>
        <Search options={options} placeholder='From' />
        <Search options={options} placeholder='To'/>
        <Input type='date'/>
        <Input type='date'/>
    </div>
  )
}
