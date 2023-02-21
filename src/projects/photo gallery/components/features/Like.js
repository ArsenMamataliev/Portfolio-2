import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Badge from '@mui/material/Badge';
import { createApi } from 'unsplash-js'; 
  
export default function Like({id, likes, liked}) {
  const unsplash = createApi({accessKey: '2auWItF6NxVxSWVj0pyLPon7G3NuwsOmQyZfxbYi07A'});
  return (
    <div>
        <Badge 
          badgeContent={likes} 
          max={999}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}  
        >
          <ThumbUpIcon
            sx={{color: liked? "red" : "#fff"}}
            onClick={()=> unsplash.photos.post(`/photos/${id}/like`)}
          />
        </Badge>
    </div>
  )
}
