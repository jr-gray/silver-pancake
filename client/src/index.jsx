import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

//   componentDidMount() {
//     axios.get('http://127.0.0.1/api')
//     .then(data => { console.log(data) })
//     .catch(err => { console.error(err) })
//   }

  render() {
    return (
      <div className="main">
        <h1>Silver Pancake</h1>
        <Search />
        <List />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));