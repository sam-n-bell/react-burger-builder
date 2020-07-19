import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.0,
    bacon: 2.5,
    meat: 3.0
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.0,
        purchasing: false
    }
    purchaseHandler = () => {
        this.setState({
            purchasing: !this.state.purchasing
        })
    }
    purchaseContinueHandler = () => {
        alert("You continue");
    }
    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        this.setState({
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type], 
            ingredients: updatedIngredients
        });
    }
    removeIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = this.state.ingredients[type] - 1 ;
        this.setState({
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
            ingredients: updatedIngredients
        });
    }
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let ingredientCount = Object.values(this.state.ingredients).reduce((a, b) => a + b);
        return (
            <Aux>
                <p>{this.state.purchasing}</p>
                <Burger ingredients={this.state.ingredients}/>
                {this.state.purchasing ? <Modal modalClicked={this.purchaseHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        totalPrice={this.state.totalPrice}
                        cancelClicked={this.purchaseHandler}
                        continueClicked={this.purchaseContinueHandler}
                    ></OrderSummary>
                </Modal> : null}
                <BuildControls 
                ingredientPrices={INGREDIENT_PRICES}
                price={this.state.totalPrice}
                orderNowDisabled={ingredientCount < 1 ? true : false}
                disabled={disabledInfo}
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                purchasing={this.purchaseHandler}/>
            </Aux>
        );
    }

}

export default BurgerBuilder;