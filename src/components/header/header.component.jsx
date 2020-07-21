import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/gato.svg';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <header>
        <Link to='/' className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/shop' className="option">CONTACT</Link>
            {
                currentUser ? 
                (<div className="option" onClick={() => auth.signOut()}>CERRAR SESIÓN</div>) :
                <Link to='/signin' className="option">ENTRAR</Link>
            }
            <CartIcon/>
        </div>
        {   hidden ? 
            null : (<CartDropdown/>) }
    </header>
);

const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);