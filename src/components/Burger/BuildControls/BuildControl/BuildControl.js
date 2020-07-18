import React from 'react';
import controlStyles from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className={controlStyles.BuildControl}>
            <div className={controlStyles.Label}>{props.label}</div>
            <button 
            disabled={props.disabled} 
            onClick={props.removed} 
            className={controlStyles.Less}>Less</button>
            <button 
            onClick={props.added} 
            className={controlStyles.More}>More</button>
        </div>
    )
}

export default BuildControl