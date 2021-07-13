import React from 'react';


class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value})
    console.log("value", this.state.value);
  }
  handleSubmit(e) {
    //console.log(this.props['searchList']);
    /*var originalMovieArray = this.props['searchList'];
    //console.log(originalMovieArray);
    for( var i=0; i< originalMovieArray.length;i++) {
      if( JSON.stringify(originalMovieArray[i].title) === JSON.stringify(this.state.value)) {
        this.state.newMovieArray.push(originalMovieArray[i].title);
      }
    }*/
    console.log("this.props.searchList", this.props.searchList);
    console.log("this.state.value", this.state.value,);
    e.preventDefault();

    this.props.updatingMovies(this.state.value, this.props.searchList);

  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          <input type = 'text' value={this.state.value} placeholder="Search.."
          onChange={this.handleChange}
          />
        </label>
        <button>Go!</button>
      </form>
    )
  }

}

export default MovieSearch;