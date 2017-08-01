import React from 'react';
import ReactDOM from 'react-dom';

class Suggestion extends React.Component {
  constructor(props) { // passing in suggestion as { name: '', image_url: '', url: '', review_count: '', rating: '' }
    super(props);
  }

  render() {
    return (
      <div className="suggestionDiv">
        <div className="img__wrap">
          <a href={this.props.suggestion.url}><img className="img__img" src={this.props.suggestion.image_url} /></a>
          {/* <div class="img__description_layer">
            <p class="img__description">name: {this.props.suggestion.name}</p>
            <p class="img__description">reviews: {this.props.suggestion.review_count}</p>
            <p class="img__description">rating: {this.props.suggestion.rating}</p>
          </div> */}
          <div>{this.props.suggestion.name}</div>
          <div>{this.props.suggestion.review_count}</div>
          <div>{this.props.suggestion.rating}</div>
        </div>
      </div>
    )
  }
}

export default Suggestion;