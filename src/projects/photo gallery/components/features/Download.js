import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

export default function Download({id}) {
  return (
    <div>
      <a href="https://unsplash.com/photos/jbcY_yvsDzk/download?ixid=MnwzNzY1MTh8MXwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHxibGFja3wxNjc2MjY0Mjcy"
      download
      target="_blank" rel="noreferrer"
      >
        <DownloadIcon />
      </a>  
    </div>
  )
}
