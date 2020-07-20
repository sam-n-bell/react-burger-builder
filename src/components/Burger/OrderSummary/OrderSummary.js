import React, { Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    render() {
        const ingredientSummary = this.props.ingredients;
        return (
            <div>
                <h3>Your Order</h3>
                <p>Your delicious burger will be composed of:</p>
                <ul>
                    {Object.keys(ingredientSummary).map(ingred => {
                        return <li key={ingred}>{ingred}: {ingredientSummary[ingred]}</li>
                    })}
                </ul>
                <p>Your price will be <strong>${this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.cancelClicked} buttonType="Danger">Cancel</Button>
                <Button clicked={this.props.continueClicked} buttonType="Success">Continue</Button>
            </div>
        )
    }
}

export default OrderSummary;