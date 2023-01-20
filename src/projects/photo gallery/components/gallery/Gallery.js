import React, {useEffect, useState } from 'react';
import style from './Gallery.module.scss';
import { createApi } from 'unsplash-js';
import { useDispatch, useSelector } from 'react-redux';
import { selectValues, totalPagesFn, totalPhotosFn } from '../../../../features/photoGallery/photoSlice';
import Photos from '../photocamp/Photos';
import Loader from '../loader/Loader';
import Alerts from '../alerts/Alert';

const unsplash = createApi({accessKey: '2auWItF6NxVxSWVj0pyLPon7G3NuwsOmQyZfxbYi07A'});

  const Gallery = () => {
    const [data, setPhotosResponse] = useState(null);
    const select = useSelector(selectValues);
    const dispatch = useDispatch();
    
    useEffect(() => {
      unsplash.search
        .getPhotos({query: `${select.query}`, orientation: `${select.orientation}`, perPage: `${select.limit}`, color: `${select.color}`, page: `${select.page}`})
        .then((result) => {
          setPhotosResponse(result);
          dispatch(totalPagesFn(result.response.total_pages));
          dispatch(totalPhotosFn(result.response.total))
          console.log(result);
        })
        .catch(() => {
          console.log('something went wrong!');
        });
    }, [select.query, select.orientation, select.limit, select.color, select.page, dispatch]);
  
    if (data === null) {
      return <Loader /> ;
    } else if (data.errors) {
      return (
        <div>
          <Alerts error={data.errors[0]} errorDescription = {'PS: Make sure to set your access token!'}/>
        </div>
      );
    } else {
      return (
        <div className={style.wrapper}>
          {
            data.response.total === 0 ?
            <Alerts error='No mathing photos' errorDescription='Please refresh page or type another text'/>  :
            <ul className={style.photoContainer}>
              {data.response.results.map((photo) => (
              <Photos 
                photo={photo}
                key={photo.id} 
              />
              ))}
            </ul>
          }
        </div>
      );
    }
  }

export default Gallery;
