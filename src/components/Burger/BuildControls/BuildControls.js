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
            {controls.map(control => (
                <BuildControl 
                key={control.label} 
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}/>
            ))}
        </div>
    )
}

export default BuildControls;