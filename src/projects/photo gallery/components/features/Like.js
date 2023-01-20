import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Badge from '@mui/material/Badge';
// import { createApi } from 'unsplash-js'; 
// import axios from 'axios';
  
export default function Like({id, likes, liked}) {
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
            color = {liked ? "primary" : "danger"}
          />
        </Badge>
    </div>
  )
}
