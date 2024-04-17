import React from 'react'
import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import ModalWatch from '../MovieWatch/MovieWatch'
// import "./MovieModal.style.css"
// import YouTube from 'react-youtube';
import './MovieModal.style.css'

const MovieModal = ({video}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const opts = {
    //     height: '100%',
    //     width: '100%',
    //     playerVars: {
    //       autoplay: 1,
    //       modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    //     },
    //   };


  return (

    
    <div>
        <Button variant="outline-danger" onClick={handleShow}>
            Watch the trailer
        </Button>

        <Modal show={show}
            onHide={handleClose}
            animation={false}
            dialogClassName='modal-90w'
            contentClassName='modal-style'
            centered
            size='xl'
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <ModalWatch video={video}/>
            </Modal.Body> 


        </Modal>
    </div>
  )
}

export default MovieModal