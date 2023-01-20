import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { createApi } from 'unsplash-js'; 

export default function Download({id}) { 
  const unsplash = createApi({accessKey: '2auWItF6NxVxSWVj0pyLPon7G3NuwsOmQyZfxbYi07A'});

  function downloadFn(){
      unsplash.photos.get({ photoId: id }).then(result => {
      if (result.type === 'success') {
        const photo = result.response;
        unsplash.photos.trackDownload({
          downloadLocation: photo.links.download_location,
        });
      }
    });
  }
  return (
    <div>
        <DownloadIcon 
          onClick = {downloadFn}
        />
    </div>
  )
}
