import React from 'react'
import Modal from 'react-responsive-modal';

const PostMovie = (props) => {
    const EditModalContent = props.movies.map(movie => {
        if (movie.id == props.movieID){
            return (
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="editTitle" className="materialize-textarea" defaultValue={movie.title} onChange={props.editLogger}></textarea>
                            <label for="editTitle">Movie Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="editDirector" className="materialize-textarea" defaultValue={movie.director} onChange={props.editLogger}></textarea>
                            <label for="editDirector">Director</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="editYear" className="materialize-textarea" defaultValue={movie.year} onChange={props.editLogger}></textarea>
                            <label for="editYear">Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="editRating" className="materialize-textarea" defaultValue={movie.rating} onChange={props.editLogger}></textarea>
                            <label for="editRating">Rate move 1-5</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="editImgURL" className="materialize-textarea" defaultValue={movie.imgURL} onChange={props.editLogger}></textarea>
                            <label for="editImgURL">Movie Image URL</label>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" onClick={props.editMovie} className="waves-effect waves-light btn postBtn">Edit Movie</button>
                    </div>
                </div>
                    
            )
        }  
    })
    return (
        <Modal open={props.open2} onClose={props.onCloseModal2} center>
            {EditModalContent} 
        </Modal>
    )
    
}

export default PostMovie;