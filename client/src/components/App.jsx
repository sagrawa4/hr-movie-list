import React from 'react';
import MovieAdded from './MovieAdded.jsx';
import MovieList from './MovieList.jsx';
import MovieSearch from './MovieSearch.jsx';
import UpdateMovieList from './UpdateMovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newMovieArray: [],
      movieArray: []
    }

    this.updatingMovies = this.updatingMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  updatingMovies(value, oldMovieArray) {
    console.log('my val', value);
    console.log('oldMovieArray', oldMovieArray);

    const newMovieArray = [...this.state.newMovieArray];
    for( var i=0; i< oldMovieArray.length;i++) {
      if( JSON.stringify(oldMovieArray[i]) === JSON.stringify(value)) {
        newMovieArray.push(oldMovieArray[i]);
      }
    }
    this.setState({newMovieArray: newMovieArray});
    console.log(newMovieArray);
    console.log(this.state.movieArray);
  }

  addMovies(value) {
    const movieArray = [...this.state.movieArray, value];
    this.setState({movieArray: movieArray});
  }

 render() {

  return (
    <div className='App'>
      <MovieAdded movieName = {this.addMovies} />

       <MovieSearch searchList = {this.state.movieArray} updatingMovies = {this.updatingMovies}/>

      { this.state.newMovieArray.length === 0 &&
        <h2>
          {this.state.movieArray.map(movie =>
       <MovieList movie= {movie} />
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