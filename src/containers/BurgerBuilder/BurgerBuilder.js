import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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
        totalPrice: 4.0
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
        updatedIngredients[type] = this.state.ingredients[type] - 1 > 0 ? this.state.ingredients[type] - 1 : 0 ;
        this.setState({
            totalPrice: updatedIngredients[type] > 0 ? this.state.totalPrice - INGREDIENT_PRICES[type] : this.state.totalPrice, 
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
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                disabled={disabledInfo}
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}/>
            </Aux>
        );
    }

}

export default BurgerBuilder;