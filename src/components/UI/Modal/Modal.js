import React from 'react'
import modalStyles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop clicked={props.modalClicked}/>
            <div className={modalStyles.Modal}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal;