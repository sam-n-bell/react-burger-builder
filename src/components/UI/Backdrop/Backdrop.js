import React from 'react';
import backdropStyles from './Backdrop.module.css';

const Backdrop = (props) => (
    <div className={backdropStyles.Backdrop} onClick={props.clicked}></div>
)

export default Backdrop;