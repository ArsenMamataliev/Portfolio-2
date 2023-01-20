import * as React from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Share from './Share';
import Download from './Download';
import Like from './Like';

export default function Features({photo}) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-around', marginTop: '10px'}}>
        <Share photo = {photo}  />
        <Download id = {photo.id} /> 
        <Like 
          id = {photo.id}
          likes = {photo.likes}
          liked = {photo.liked_by_user}
        /> 
        <DeleteIcon />
    </Box>
  );
}