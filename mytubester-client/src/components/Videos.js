import React from 'react';
import VideoCard from './VideoCard';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { getVideos } from '../actions/videos';

class Videos extends React.Component  {
  componentDidMount() {
    this.props.getVideos()
  }

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

const mapStateToProps = (state) => {
  return ({
    videos: state.videos
  })
}

export default connect(mapStateToProps, {getVideos})(Videos);