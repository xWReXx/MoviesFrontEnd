import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import MovieList from './components/MovieList'

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      movies: [],
      loaded: false,
    }
  }

  async componentDidMount() {
    const response = await fetch('https://g102-movie-project.herokuapp.com')
    const json = await response.json()
    this.setState({movies: json, loaded: true})
  }

  render() {
    return (
      <div>
        <Header />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
