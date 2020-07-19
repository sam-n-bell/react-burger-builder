import React from 'react';
import navigationStyles from './NavigationItem.module.css'

const NavigationItem = (props) => {
    return (
        <li className={navigationStyles.NavigationItem}>
            <a
                href={props.link}
                className={
                    props.active ? navigationStyles.active : null
                }>
                {props.children}
            </a>
        </li>
    )
}

export default NavigationItem;