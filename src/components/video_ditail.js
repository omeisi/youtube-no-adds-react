import React from 'react';

const VideoDitail = ({video}) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoId = video.id.videoId;
  console.log(videoId);
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-ditail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
     <div className="ditails">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
     </div>
    </div>
  );
};

export default VideoDitail;
