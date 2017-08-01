import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Suggestion from './components/Suggestion.jsx';
import Recents from './components/Recents.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recents: [],
      suggestion: {}
    }
  }

  // getRecents() {
  //   axios.get('http://127.0.0.1:3000/api/recents')
  //   .then(response => {
  //     this.setState({ recents: response.data });
  //     console.log('GET request successful! Setting state to', response.data);
  //   })
  //   .catch(err => { if (err) { console.error(err) }})
  // }

  getSuggestion(term, location) {
    axios.post('http://127.0.0.1:3000/api/search', {
      term: term,
      location: location
    })
    .then(response => { 
      // var rand = Math.floor(Math.random() * 19);
      // var business = response.data[rand];
      var suggestion = this.state.suggestion;
      var res = response.data;
      suggestion.name = res.name;
      suggestion.image_url = res.image_url;
      suggestion.url = res.url;
      suggestion.review_count = res.review_count;
      suggestion.rating = res.rating;

      this.setState({
        recents: this.state.recents, 
        suggestion: suggestion
      }) 
    })
    .catch(err => { console.error(err) })
  }

  render() {
    return (
      <div className="main">
        <h1>Silver Pancake</h1>
        <Search onSearch={this.getSuggestion.bind(this)}/>
        <Suggestion suggestion={this.state.suggestion}/>
        <Recents recents={this.state.recents} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));