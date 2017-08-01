import React from 'react';
import ReactDOM from 'react-dom';

class Suggestion extends React.Component {
  constructor(props) { // passing in suggestion as { name: '', image_url: '', url: '', review_count: '', rating: '' }
    super(props);
  }

  render() {
    return (
      <div>
        <h2>HERE IS YOUR SUGGESTION:</h2>
        <p>drumroll please..........</p>
        <a href={this.props.suggestion.url}><img className="suggestionImage" src={this.props.suggestion.image_url} /></a>
        <div>name: {this.props.suggestion.name}</div>
        <div>reviews: {this.props.suggestion.review_count}</div>
        <div>rating: {this.props.suggestion.rating}</div>
      </div>
    )
  }
}

export default Suggestion;