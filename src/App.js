import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import MovieList from './components/MovieList'
import MovieHome from './components/MovieHome'
import MovieModal from './components/MovieModal'
import { Route } from 'react-router-dom'
import PostMovie from './components/PostMovie' 

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      open: false,
      open1: false,
      movies: [],
      loaded: false,
      movieID: 0,
    }
  }

  async componentDidMount() {
    const response = await fetch('https://g102-movie-project.herokuapp.com')
    const json = await response.json()
    this.setState({movies: json, loaded: true})
  }

  onOpenModal = () => {
    this.setState({ open: true });
  }

  onOpenModal1 = () => {
    this.setState({ open1: true });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  onCloseModal1 = () => {
    this.setState({ open1: false });
  }

  modalMovieID = (e) => {
    this.setState({movieID: e.taregt.value})
  }

  render() {
    return (
        <div>
          <Header onOpenModal1={this.onOpenModal1}/>
          <PostMovie open={this.state.open1} onCloseModal1={this.onCloseModal1}/>
          <MovieModal open={this.state.open}  onCloseModal={this.onCloseModal} movies={this.state.movies}/>
          <Route exact path="/" render={()=><MovieHome onOpenModal={this.onOpenModal} movies={this.state.movies}/>}/>
          <Route path="/allratings" render={()=> <MovieList movies={this.state.movies}/>}/>
        </div>
    )
  }
}

export default App;
