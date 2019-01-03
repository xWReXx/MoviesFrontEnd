import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className="appHeader">
            <h1>Comedy Reviews</h1>
            <div className="postMovie">
                <Link to="/"><button className="waves-effect waves-light btn postBtn">Movies Home</button></Link>
                <button className="waves-effect waves-light btn postBtn" onClick={props.onOpenModal1}>Add a movie</button>
                <Link to="/allratings"><button className="waves-effect waves-light btn postBtn">View All Ratings</button></Link>
            </div>
        </div>
            
    )
}

export default Header