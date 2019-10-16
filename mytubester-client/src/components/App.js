import React from 'react';
import Videos from './Videos.js';

const API_URL = process.env.REACT_APP_API_URL;
// const videos = [
//   {
//     title: "Britney Spears - Toxic (Official Music Video)",
//     description: "Britney Spears official music video for Toxic.",
//     video_url: "https://www.youtube.com/watch?v=LOZuxwVk7TU"
//   }
// ]


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }
  }
  
  componentDidMount() {
    fetch(`${API_URL}/searches`)
      .then(response => response.json())
      .then(videos => this.setState({videos}))
  }
  
  render() {
    return (
      <div className="App">
        <Videos videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
