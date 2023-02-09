import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GradeIcon from '@mui/icons-material/Grade';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import noPhoto from '../../../../assets/img/no photo.jpg'
import style from './movieDetail.module.scss'
import { useSelector } from 'react-redux';
import { selectValues } from '../../../../features/movie info/movieInfo';
import BackToBtn from '../backToBtn/BackToBtn';

export default function MovieDetail() {
  const [detail, setDetail] = useState([]);
  const movie = useSelector(selectValues);

  useEffect(()=>{
    axios.get(`http://www.omdbapi.com/?i=${movie.id}&plot=${movie.plot}&apikey=${movie.api_key}`)
      .then((response)=> {
        setDetail(response.data);
    });
  }, [movie.api_key, movie.id, movie.plot])
  return (
    <div className={style.wrapper}>
      <BackToBtn />
      <div className={style.movieName}>{detail['Title']}</div>
      <div className={style.container}>
        <div className={style.photo}>
          <img src={detail['Poster'] !== 'N/A'? detail['Poster'] : noPhoto } alt="movie_photo" />
        </div>
          <div className={style.info}>
            <p><span>Year:</span> {detail['Year']}</p>
            <p><span>Country:</span> {detail['Country']}</p>
            <p><span>BoxOffice:</span> {detail['BoxOffice']}</p>
            <p><span>Director:</span> {detail['Director']}</p>
            <p><span>Writer:</span> {detail['Writer']}</p>
            <p><span>Genre:</span> {detail['Genre']}</p>
            <p><span>Runtime</span> {detail['Runtime']}</p>
            <p><span>Actors:</span> {detail['Actors']}</p>
            <p><span>Plot:</span> {detail['Plot']}</p>
            
            <div className={style.rateInfo}>
            <p><CodeIcon />{detail['imdbID']}</p>
            <p><GradeIcon color='warning' />{detail['imdbRating']}</p>
            <p><ThumbUpOffAltIcon/>{detail['imdbVotes']}</p>
            </div>
            <div className={style.rateInfo}>
            {
                detail['Ratings'] && detail['Ratings'].map((rate, index)=> {
                return<p key={index}><EmojiEventsIcon color='warning'/>{rate.Source} {rate.Value}</p>
                })
            }
            </div>
        </div>
      </div>
    </div>
  )
}
