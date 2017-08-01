import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {}
    }
  }

  onTermChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onLocationChange(e) {
    this.setState({
      location: e.target.value
    })
  }

  Search() {
    this.props.onSearch(this.state.term, this.state.location);
  }

  render() {
    return (
      <div>
        Something to do: <input value={this.state.term} onChange={this.onTermChange} /><br/>
        Somewhere to do it*: <input value={this.state.location} onChange={this.onLocationChange} /><br/>
        <button onClick={this.search}> Search </button>
      </div>
    )
  }
}

export default Search;