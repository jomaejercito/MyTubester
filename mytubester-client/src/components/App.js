import React from 'react';
import Videos from './Videos.js';


const API_URL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }
  }
  
  componentDidMount() {
    fetch(`${API_URL}/videos`)
      .then(response => response.json())
      .then(videos => this.setState({videos}))
  }
  
  render() {
    return (
      <div className="ui container">
        <div className="App">
          <Videos videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
