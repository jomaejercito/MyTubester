import React from 'react';
import Videos from './Videos.js';

const videos = [
  {
    title: "Britney Spears - Toxic (Official Music Video)",
    description: "Britney Spears official music video for Toxic.",
    video_url: "https://www.youtube.com/watch?v=LOZuxwVk7TU"
  }
]


class App extends React.Component {
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/users', {
  //     method: 'GET'
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }
  
  render() {
    return (
      <div className="App">
        <Videos videos={videos} />
      </div>
    );
  }
}

export default App;
