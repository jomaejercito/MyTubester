import React from 'react';

const VideoCard = ({ video }) => (
  <div key={video.id}  className="VideoCard">
    <h3>{video.title}</h3>
    <p>{video.description}</p>
    <p>{video.video_url}</p>
  </div>
)

export default VideoCard;