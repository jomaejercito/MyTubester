import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = () => {
    
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
              <input 
                type="text" 
                value={this.state.term} 
                onChange={this.onInputChange}
              />
          </div>
      	</form>
      </div>
    )
  }
}

export default SearchBar;