import React, {useEffect, useState } from 'react';
import style from './Gallery.module.scss';
import { createApi } from 'unsplash-js';
import { useDispatch, useSelector } from 'react-redux';
import { selectValues, totalPagesFn, totalPhotosFn } from '../../../../features/photoGallery/photoSlice';
import Photos from '../photocamp/Photos';

const api = createApi({
  accessKey: '2auWItF6NxVxSWVj0pyLPon7G3NuwsOmQyZfxbYi07A',
});

  const Gallery = () => {
    const [data, setPhotosResponse] = useState(null);
    const select = useSelector(selectValues);
    const dispatch = useDispatch();
    
    useEffect(() => {
      api.search
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
      return <div>Loading...</div>;
    } else if (data.errors) {
      return (
        <div>
          <div>{data.errors[0]}</div>
          <div>PS: Make sure to set your access token!</div>
        </div>
      );
    } else {
      return (
        <div className={style.wrapper}>
          <ul className={style.photoContainer}>
            {data.response.results.map((photo) => (
              <Photos photo={photo} key={photo.id} />
            ))}
          </ul>
        </div>
      );
    }
  }

export default Gallery;
