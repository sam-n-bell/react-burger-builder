import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import logoStyles from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={logoStyles.Logo}>
            <img src={burgerLogo} alt="My Burger"></img>
        </div>
    )
}

export default Logo;