import React from 'react'
import Modal from 'react-responsive-modal';


const MovieModal = (props) => {
    return (
        <div>
          <Modal open={props.open} onClose={props.onCloseModal} center>
            <img className="movieHomeIMG" src={props.movies.imgURL} alt="blank"/>
          </Modal>
        </div>
    );
}

export default MovieModal