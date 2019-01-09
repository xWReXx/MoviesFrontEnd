import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import MovieList from './components/MovieList'
import MovieHome from './components/MovieHome'
import MovieModal from './components/MovieModal'
import PostMovie from './components/PostMovie' 
import EditMovie from './components/EditMovie'
import { Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      open: false,
      open1: false,
      open2: false,
      movies: [],
      loaded: false,
      movieID: 0
    }
  }

  async componentDidMount() {
    const response = await fetch('https://g102-movie-project.herokuapp.com')
    const json = await response.json()
    this.setState({movies: json, loaded: true})
  }

  loadMovies = () =>{
    fetch('https://g102-movie-project.herokuapp.com')
    .then(response => response.json())
    .then((response) => this.setState({movies: response, loaded: true}))
  }

  submitMovie = () =>{
    let body = {
      title: this.state.title,
      director: this.state.director,
      year: this.state.year,
      rating: this.state.rating,
      imgURL: this.state.imgURL
    }
      fetch('https://g102-movie-project.herokuapp.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(body)
    })
    .then(() => {
      this.loadMovies()
      this.setState({ open1: false });
    })
  }

  deleteMovie = (e) =>{
    fetch('https://g102-movie-project.herokuapp.com/' + e.target.id, {
    method: 'DELETE',
    })
    .then(() => this.loadMovies())
  }

  editMovie = () =>{
    let body = {
      title: this.state.editTitle,
      director: this.state.editDirector,
      year: this.state.editYear,
      rating: this.state.editRating,
      imgURL: this.state.editImgURL
    }
    fetch('https://g102-movie-project.herokuapp.com/' + this.state.movieID, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(body)
    })
    .then(() => {
      this.loadMovies()
      this.setState({ open2: false });
    })
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

  editLogger = (e) => {
    // this.setState({[e.target.id]: e.target.value})

    switch (e.target.id){
      case "editTitle":
        this.setState({editTitle: e.target.value})
      break;
      case "editDirector":
        this.setState({editDirector: e.target.value})
      break;
      case "editYear":
        this.setState({editYear: e.target.value})
      break;
      case "editRating":
        this.setState({editRating: e.target.value})
      break;
      case "editImgURL":
        this.setState({editImgURL: e.target.value})
      break;
    }
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  onCloseModal1 = () => {
    this.setState({ open1: false });
  }

  onCloseModal2 = () => {
    this.setState({ open2: false });
  }

  modalMovieID = (e) => {
    this.setState({movieID: e.target.id})
    setTimeout( ()=>{
      this.setState({open: true})
    }, 20)
  }

  onOpenModal1 = () => {
    this.setState({ open1: true });
  }

  modalEditMovieID = (e) => {
    this.setState({movieID: e.target.id})
    console.log(this.state.movieID)
    var movieData = this.state.movies.find( movie =>  movie.id == e.target.id)
    this.setState({editTitle: movieData.title})
    this.setState({editDirector: movieData.director})
    this.setState({editYear: movieData.year})
    this.setState({editRating: movieData.rating})
    this.setState({editImgURL: movieData.imgURL})
    
    setTimeout( ()=>{
    this.setState({open2: true})
    }, 20)
  }

  render() {
    return (
        <div>
          <Header 
            onOpenModal1={this.onOpenModal1}
          />
          <PostMovie 
            open1={this.state.open1} 
            logger={this.logger}
            submitMovie={this.submitMovie}
            onCloseModal1={this.onCloseModal1}
            
            />
          <EditMovie 
            movies={this.state.movies}
            movieID={this.state.movieID}
            open2={this.state.open2}
            editMovie={this.editMovie}
            editLogger={this.editLogger}
            onCloseModal2={this.onCloseModal2}

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
            open={this.state.open1} 
            modalEditMovieID={this.modalEditMovieID}
          />}/>
        </div>
    )
  }
}

export default App;
