import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

export default function Download({url}) {
  async function download(url) {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = "myImage.jpeg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function toDataURL(url) {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }

  function onClick() {
    download(url);
  }

  return (
    <div onClick={onClick}>
      <DownloadIcon /> 
    </div>
  )
}
