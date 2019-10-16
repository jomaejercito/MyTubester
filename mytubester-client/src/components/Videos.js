import React from 'react';

const Videos = (props) => (
  <div>
    <h1>MyTubester</h1>
    {props.videos.map(video =>
      <div className="SearchCard">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <p>{video.video_url}</p>
      </div>
    )}
  </div>
);

export default Videos;