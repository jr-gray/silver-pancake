import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(e) {
    let formValues = this.state.formValues;
    let name = e.target.name;
    let value = e.target.value;

    formValues[name] = value;

    this.setState({formValues})
  }

  search() {
    console.log('inside search function!');
    this.props.onSearch(this.state.formValues.term, this.state.formValues.location);
  }

  render() {
    return (
      <div className="searchDiv">
        <input name="term" className="term" placeholder="what would you like?" onChange={this.handleChange} />
        <br/>
        <input name="location" className="location" placeholder="enter a location" onChange={this.handleChange} />
        <br/>
        <button onClick={this.search}> Search </button>
      </div>
    )
  }
}

export default Search;