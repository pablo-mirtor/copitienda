import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/gato.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
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
        </div>
    </header>
);

export default Header;