import React from 'react';
import HeroVideo from './HeroVideo/HeroVideo';
import HeroDescription from './HeroDescription/HeroDescription';


const VideoDetail = ({ video })  => {

  if(!video) {
    return (
      <div></div>
    );
  }
  else {
    return(
      <div>
        <HeroVideo video={video} />
        <HeroDescription video={video} />
      </div>
    );
  }
}

export default VideoDetail;
