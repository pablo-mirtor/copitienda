import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/gato.svg';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {signOutStart} from '../../redux/user/user.actions';

import './header.styles.scss';

const Header = ({currentUser, hidden, signOutStart}) => (
    <header>
        <Link to='/' className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/shop' className="option">CONTACT</Link>
            {
                currentUser ? 
                (<div className="option" onClick={signOutStart}>CERRAR SESIÓN</div>) :
                <Link to='/signin' className="option">ENTRAR</Link>
            }
            <CartIcon/>
        </div>
        {   hidden ? 
            null : (<CartDropdown/>) }
    </header>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);