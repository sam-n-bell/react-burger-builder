import React from 'react';
import controlsStyles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ]
    return (
        <div className={controlsStyles.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(control => (
                <BuildControl 
                key={control.label} 
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}/>
            ))}
            <button disabled={props.orderNowDisabled} className={controlsStyles.OrderButton} onClick={props.purchasing}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls;