import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recents: []
    }
  }

  getRecents() {
    axios.get('http://127.0.0.1:3000/api/recents')
    .then(response => {
      this.setState({ recents: response.data });
      console.log('GET request successful! Setting state to', response.data);
    })
    .catch(err => { if (err) { console.error(err) }})
  }

  getSuggestion(term, location) {
    axios.post('http://127.0.0.1:3000/api/', {
      term,
      location
    })
    .then(response => { console.log(response) })
    .catch(err => { console.error(err) })
  }

  render() {
    return (
      <div className="main">
        <h1>Silver Pancake</h1>
        <Search onSearch={this.getSuggestion.bind(this)}/>
        <List recents={this.state.recents}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));