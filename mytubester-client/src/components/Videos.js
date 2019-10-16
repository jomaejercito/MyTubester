import React from 'react';

const Videos = (props) => (
  <div className="VideosContainer">
    <h1>MyTubester</h1>
    {props.videos.map(video =>
      <div className="VideoCard">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <p>{video.video_url}</p>
      </div>
    )}
  </div>
);

export default Videos;