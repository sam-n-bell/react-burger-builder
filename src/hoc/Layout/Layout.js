import React from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout