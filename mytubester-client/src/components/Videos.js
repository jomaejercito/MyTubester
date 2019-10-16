import React from 'react';
import VideoCard from './VideoCard';
import SearchBar from './SearchBar';


class Videos extends React.Component  {
  render() {
    return (
      <div className="VideosContainer">
        <h1>MyTubester</h1>
        {this.props.videos.map(video => <VideoCard key={video.id} video={video} />)}
        <SearchBar />
      </div>
    );
  }
}

export default Videos;