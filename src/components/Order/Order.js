import React from 'react';
import classes from './Order.module.css';


const Order = (props) => {
    const keys = Object.keys(props.ingredients)
    return (
        <div className={classes.Order}>
            {keys.map(key => (
                <p key={key}>{key} ({props.ingredients[key]})</p>
            ))}
            <p>Price: <strong>USD ${props.price}</strong></p>
        </div>
    )
}

export default Order;
