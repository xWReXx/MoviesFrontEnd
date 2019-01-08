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

  post = (data) =>{
      fetch('https://g102-movie-project.herokuapp.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(data)
    })
  }

delete = (movieID) =>{
  fetch('https://g102-movie-project.herokuapp.com/' + movieID, {
  method: 'DELETE',
  })
}

deleteMovie = (e) => {
  console.log("test")
  this.setState({deleteID: e.target.id})
  var movieID = this.setState.DeleteID
  setTimeout( ()=>{
    this.delete(movieID)
  }, 500)

}

submitMovie = (e) => {
  console.log("test")
  e.preventDefault();
  let body = {
    title: this.state.title,
    director: this.state.director,
    year: this.state.year,
    rating: this.state.rating,
    imgURL: this.state.imgURL
  }
  this.post(body)
}

  logger = (e) => {
    switch (e.target.id){
      case "title":
        this.setState({title: e.target.value})
      break;
      case "director":
        this.setState({director: e.target.value})
      break;
      case "year":
        this.setState({year: e.target.value})
      break;
      case "rating":
        this.setState({rating: e.target.value})
      break;
      case "imgURL":
        this.setState({imgURL: e.target.value})
      break;
    }
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
    this.setState({movieID: e.target.id})
    setTimeout( ()=>{
      this.setState({open: true})
    }, 500)
  }

  render() {
    return (
        <div>
          <Header onOpenModal1={this.onOpenModal1}/>
          <PostMovie 
            open={this.state.open1} 
            onCloseModal1={this.onCloseModal1}
            logger={this.logger}
            submitMovie={this.submitMovie}
            />
          <MovieModal 
            open={this.state.open}  
            onCloseModal={this.onCloseModal} 
            movies={this.state.movies}
            movieID={this.state.movieID}
          />
          <Route exact path="/" render={()=><MovieHome 
            onOpenModal={this.onOpenModal} 
            modalMovieID={this.modalMovieID} 
            movies={this.state.movies}
          />}/>
          <Route path="/allratings" render={()=> <MovieList 
            movies={this.state.movies}
            deleteMovie={this.deleteMovie}
          />}/>
        </div>
    )
  }
}

export default App;
