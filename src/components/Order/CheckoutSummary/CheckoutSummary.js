import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button buttonType="Danger" clicked={props.onCheckoutCancelled}>Cancel</Button>
            <Button buttonType="Success" clicked={props.onCheckoutContinued}>Continue</Button>
        </div>
    )
}

export default CheckoutSummary;