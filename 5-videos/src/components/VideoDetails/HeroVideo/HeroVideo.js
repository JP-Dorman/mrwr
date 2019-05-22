import React from 'react';


// We can destructure out
const HeroVideo = ({ video })  => {

  console.log(video)

  return(
    <div className="hero-video">
      <div className="ui embed">
        <iframe
          title="hero video player"
          src={`https://youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
}

export default HeroVideo;
