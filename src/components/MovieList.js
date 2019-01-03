import React from 'react'

const MovieList = (props) => {
    console.log(props)
    const Movies = props.movies.map(movie => {
        return (
            <div>
                <div className="row movies">
                    <div className="col m3">
                        <h5>Movie Title:</h5>
                        {movie.title}
                    </div>
                    <div className="col m2">
                        <h5>Director:</h5>
                        {movie.director}
                    </div>
                    <div className="col m2">
                        <h5>Year:</h5>
                        {movie.year}
                    </div>
                    <div className="col m2">
                        <h5>Rating:</h5>
                        {movie.rating}
                    </div>
                    <div className="col m2">
                        <img className="movieIMG" src={movie.imgURL} alt="blank"/>
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn postBtn">Delete movie</button>
                </div>
            </div>    
        )
    })
    return (
        <div className='container'>{Movies}</div>
    )
}

export default MovieList;