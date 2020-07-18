import React from 'react' // using JSX
import burgerStyles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let ingredientElements = []
    for (let key in props.ingredients)
        for (let i = 0; i < props.ingredients[key]; i++)
            ingredientElements.push(<BurgerIngredient key={key + i} type={key} />)
    if (ingredientElements.length < 1) {
        ingredientElements = 'Start Adding Some Toppings!'
    }
    return (
        <div className={burgerStyles.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientElements}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};


export default Burger