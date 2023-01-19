import * as React from 'react';
import Box from '@mui/material/Box';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import Share from './Share';

export default function Features({photo}) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-around', marginTop: '10px'}}>
        <Share photo = {photo}  />
        <DownloadIcon />
        <Badge 
          color="primary" 
          badgeContent={photo.likes} 
          max={999}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          >
            <ThumbUpIcon />
          </Badge>
        <DeleteIcon />
    </Box>
  );
}