import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/gato.svg';

const Header = () => (
    <header>
        <Link to='/' className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/shop' className="option">CONTACT</Link>
        </div>
    </header>
);

export default Header;