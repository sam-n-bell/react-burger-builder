import React from 'react';
import { NavLink } from 'react-router-dom'
import navigationStyles from './NavigationItem.module.css'

const NavigationItem = (props) => {
    // exact helps with identifying active page in the navbar, so the / doesnt make all nav links show active
    return (
        <li className={navigationStyles.NavigationItem}>
            <NavLink
                to={props.link}
                exact
                activeClassName={navigationStyles.active}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem;