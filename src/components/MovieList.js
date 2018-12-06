import React from 'react'

const MovieList = (props) => {
    console.log(props)
    const Movies = props.movies.map(movie => {
        return (
                <div className="row movies">
                    <div className="col m3">
                        {movie.title}
                    </div>
                    <div className="col m3">
                        {movie.director}
                    </div>
                    <div className="col m2">
                        {movie.year}
                    </div>
                    <div className="col m1">
                        {movie.rating}
                    </div>
                    <div className="col m3">
                        <img className="movieIMG" src={movie.imgURL} alt="blank image"/>
                    </div>
                </div>
        )
    })
    return (
        <div className='container'>{Movies}</div>
    )
}

export default MovieList;