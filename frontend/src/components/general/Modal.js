
import React from 'react'
import LocationForm from '../admin/LocationForm'
import './Modal.css'

const Modal = (props) => {
  return(
    <div id="modal">
      <div id="modal-box">
      <h1>I am inside modal box </h1>
      <LocationForm
        handleLocationPost={props.handleLocationPost}
        toggleModal={props.toggleModal}
        type={props.type}/>
      </div>
    </div>
  )
}

export default Modal;
