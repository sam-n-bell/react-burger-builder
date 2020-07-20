import React from 'react';
import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import Navigationitems from '../NavigationItems/NavigationItems'
const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <Logo/>
            <nav>
                <Navigationitems/>
            </nav>
        </div>
    )
}

export default SideDrawer;