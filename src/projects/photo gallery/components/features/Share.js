import React from "react";
import { RWebShare } from "react-web-share";
import ShareIcon from '@mui/icons-material/Share';

export default function Share({photo}){
  return (
    <div>
      <RWebShare
        data={{
          text: `${photo.alt_description}`,
          url: `${photo.urls.regular}`,
          title: "Photo gallery",
        }}
        onClick={() => console.log("Shared successfully!")}
      >
        <ShareIcon />
      </RWebShare>
    </div>
  );
};
