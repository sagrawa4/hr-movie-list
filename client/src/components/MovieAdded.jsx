import React from 'react';

class MovieAdded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    //console.log(this.state.value);
  }

  handleSubmit(event) {
    //console.log(this.state.value);
    this.props.movieName(this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button>Add Movies</button>
      </form>
    )
  }
}

export default MovieAdded;