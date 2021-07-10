import React from 'react';
import MovieList from './MovieList.jsx';
import MovieSearch from './MovieSearch.jsx';
import UpdateMovieList from './UpdateMovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newMovieArray: []
    }

    this.updatingMovies = this.updatingMovies.bind(this);
  }

  updatingMovies(value, oldMovieArray) {
    console.log('my val', value);
    console.log('oldMovieArray', oldMovieArray);

    const newMovieArray = [...this.state.newMovieArray];
    for( var i=0; i< oldMovieArray.length;i++) {
      if( JSON.stringify(oldMovieArray[i].title) === JSON.stringify(value)) {
        newMovieArray.push(oldMovieArray[i].title);
      }
    }
    this.setState({newMovieArray: newMovieArray});
    console.log(newMovieArray);
  }
 render() {

  return (
    <div className='App'>
       <MovieSearch searchList = {this.props.inputMovies} updatingMovies = {this.updatingMovies}/>

      { this.state.newMovieArray.length === 0 &&
        <h2>
          {this.props.inputMovies.map(movie =>
       <MovieList movie= {movie.title} />
       )}
        </h2>
      }
      {this.state.newMovieArray.map(movie =>
      <UpdateMovieList movie = {movie}/>
      )}
    </div>
  )
 }



}

export default App;