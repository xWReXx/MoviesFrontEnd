import React from 'react'
import Modal from 'react-responsive-modal';


const MovieModal = (props) => {

    const ModalContent = props.movies.map(movie => {
        if (movie.id == props.movieID){
            return (   
                <div>
                <h5>{movie.title}</h5>      
                <img className="movieModalIMG" onClick={props.modalMovieID} src={movie.imgURL} alt="blank"/> 
                <p>Director: {movie.director}</p> 
                <p>Year: {movie.year}</p> 
                <p>Rating: {movie.rating}</p> 
                </div>         
        )
        }
        return null
        
    })

    return (
        <div>
          <Modal open={props.open} onClose={props.onCloseModal} center>
            {ModalContent}
          </Modal>
        </div>
    );
}

export default MovieModal