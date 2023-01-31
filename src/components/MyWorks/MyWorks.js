import React from 'react';
import style from './MyWorks.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {MyWork} from './MyWork/MyWork';
import photoGallery from './../../assets/img/photo_gallery.jpg';
import booking from './../../assets/img/booking.jpg';
import movieInfo from './../../assets/img/movie info.png';
import currencyExchange from './../../assets/img/currency.png';

export const MyWorks = () => {
    const networksData=[
        { 
            title: 'Photo Gallery', 
            stack: ['React', 'Redux', 'MaterialUI', 'SCSS', 'UnSplash API'],
            imgLink: photoGallery,
            link: 'photo_gallery'
        }, 
        {
            title: 'Booking',
            stack: ['React', 'Redux', 'MaterialUI', 'SCSS'],
            imgLink: booking,
            link: 'booking'
        },
        { 
            title: 'Movie info', 
            stack: ['React', 'Redux', 'MaterialUI', 'SCSS', 'Axios'],
            imgLink: movieInfo,
            link: 'movie_info'
        }, 
        {
            title: 'Currency Exchange',
            stack: ['React', 'Redux', 'MaterialUI', 'SCSS', 'Axios'],
            imgLink: currencyExchange,
            link: 'currency_exchange'
        },
      ]
    
    return (
        <div className={style.myWorks}>
            <div className={styleContainer.container}>
                <div className={style.links}>
                    {networksData.map(data=>
                        <MyWork title={data.title}
                            key={data.title}
                            imgLink={data.imgLink}
                            stack={data.stack}
                            link={data.link}
                        />
                    )}
                </div>
            </div>
        </div>
    )

}