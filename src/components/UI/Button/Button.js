import React from 'react';
import buttonStyles from './Button.module.css';

const Button = (props) => {
    return (
        <button
            className={[buttonStyles.Button, buttonStyles[props.buttonType]].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default Button;