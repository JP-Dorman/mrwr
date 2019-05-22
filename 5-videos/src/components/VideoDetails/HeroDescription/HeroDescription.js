import React from 'react';


// We can destructure out
const HeroVideo = ({ video })  => {

  return(
    <div className="hero-description ui segment">
      <p>
        {video.snippet.description}
      </p>
    </div>
  );
}

export default HeroVideo;
