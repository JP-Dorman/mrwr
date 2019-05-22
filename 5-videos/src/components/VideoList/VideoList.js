import React from 'react';
import VideoItem from '../VideoItem/VideoItem';


// We can destructure out
const VideoList = ({ videos, onVideoSelect })  => {

  const renderedList = videos.map((video) => {
    return(
      <VideoItem key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
    )
  })

  return(
    <div className="video-list ui relaxed divided list"
      style={{marginBottom: '20px'}}>
      {renderedList}
    </div>
  );
}

export default VideoList;
