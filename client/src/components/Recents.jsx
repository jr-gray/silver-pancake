import React from 'react';
import axios from 'axios';

class Recents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recents: []
    }
  }

  getRecents() {
    console.log('getRecents invoked!^.^');
    axios.get('http://127.0.0.1:3000/api/recents')
    .then(response => {
      var recents = [];
      response.data.forEach(item => { recents.push(item) })
      this.setState({ recents });
    })
    .catch(err => { if (err) { console.error(err) }})
  }

  render() {
    return (
      <div className="recentsDiv">
        <button onClick={this.getRecents.bind(this)}>Recent</button>
        <ul className="recentList">
          {this.state.recents.map((item, index) => { return <li key={index}><a className="recentSuggestions" href={item.url}>{item.name}</a></li> })}
        </ul>
      </div>
    )
  }
}

export default Recents;