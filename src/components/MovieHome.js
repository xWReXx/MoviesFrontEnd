import React from 'react'


const MovieHome = (props) => {
    const Movies = props.movies.map(movie => {
        return (          
                <img className="movieHomeIMG" id={movie.id} onClick={props.modalMovieID} src={movie.imgURL} alt="blank"/>           
        )
    })

    return (
        <div>
            <div className="container moviesHomeFlex">{Movies}</div>
        </div>
    )
   
}

export default MovieHome;