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
      <div>
        Something to do: 
        <input name="term" onChange={this.handleChange} />
        <br/>
        Somewhere to do it*: 
        <input name="location" onChange={this.handleChange} />
        <br/>
        <button onClick={this.search}> Search </button>
      </div>
    )
  }
}

export default Search;