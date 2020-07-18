import React from 'react'
import modalStyles from './Modal.module.css'

const Modal = (props) => {
    return (
        <div className={modalStyles.Modal}>
            {props.children}
        </div>
    )
}

export default Modal;