import React from 'react'
import Modal from 'react-responsive-modal';

const PostMovie = (props) => {

    return (
        <div>
            <Modal open={props.open1} onClose={props.onCloseModal1} center>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="title" className="materialize-textarea" onChange={props.logger}></textarea>
                            <label for="title">Movie Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="director" className="materialize-textarea" onChange={props.logger}></textarea>
                            <label for="director">Director</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="year" className="materialize-textarea" onChange={props.logger}></textarea>
                            <label for="year">Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="rating" className="materialize-textarea" onChange={props.logger}></textarea>
                            <label for="rating">Rate move 1-5</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="imgURL" className="materialize-textarea" onChange={props.logger}></textarea>
                            <label for="imgURL">Movie Image URL</label>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" onClick={props.submitMovie} className="waves-effect waves-light btn postBtn">Add Movie</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PostMovie;