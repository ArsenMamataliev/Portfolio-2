import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CodeIcon from '@mui/icons-material/Code';

export default function MovieDetail() {
  return (
    <div>
         <div className={style.movieName}>{movies['Title']}</div>
        <div className={style.container}>
            <div className={style.photo}>
            <img src={movies['Poster']} alt="movie_photo" />
            </div>
            <div className={style.info}>
                <p><span>Year:</span> {movies['Year']}</p>
                <p><span>Country:</span> {movies['Country']}</p>
                <p><span>BoxOffice:</span> {movies['BoxOffice']}</p>
                <p><span>Director:</span> {movies['Director']}</p>
                <p><span>Writer:</span> {movies['Writer']}</p>
                <p><span>Genre:</span> {movies['Genre']}</p>
                <p><span>Runtime</span> {movies['Runtime']}</p>
                <p><span>Actors:</span> {movies['Actors']}</p>
                <p><span>Plot:</span> {movies['Plot']}</p>

                <div className={style.rateInfo}>
                <p><CodeIcon />{movies['imdbID']}</p>
                <p><GradeIcon />{movies['imdbRating']}</p>
                <p><ThumbUpOffAltIcon/>{movies['imdbVotes']}</p>
                
                {/* {
                    movies['Ratings'].map((rate, index)=> {
                    return <p key={index}>{rate.Source} {rate.Value}</p>
                    })
                } */}
            </div>
        </div>
      </div>
    </div>
  )
}
