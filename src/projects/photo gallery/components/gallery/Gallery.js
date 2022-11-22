import React, {useEffect, useState } from 'react';
import './Gallery.module.scss';
import { createApi } from 'unsplash-js';

const api = createApi({
  accessKey: '2auWItF6NxVxSWVj0pyLPon7G3NuwsOmQyZfxbYi07A',
});

const PhotoComp = ({ photo }) => {
    const { user, urls } = photo;
  
    return (
      <>
        <img className="img" src={urls.regular} alt="photos"/>
        <a
          className="credit"
          target="_blank"
          rel="noreferrer"
          href={`https://unsplash.com/@${user.username}`}
        >
          {user.name}
        </a>
      </>
    );
  };
  
  const Gallery = () => {
    const [data, setPhotosResponse] = useState(null);
  
    useEffect(() => {
      api.search
        .getPhotos({ query: 'cat', orientation: 'landscape' })
        .then((result) => {
          setPhotosResponse(result);
        })
        .catch(() => {
          console.log('something went wrong!');
        });
    }, []);
  
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
        <div className="feed">
          <ul className="columnUl">
            {data.response.results.map((photo) => (
              <li key={photo.id} className="li">
                <PhotoComp photo={photo} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

export default Gallery;
