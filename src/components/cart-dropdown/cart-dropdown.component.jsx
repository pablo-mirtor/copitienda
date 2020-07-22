import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
const CartDropdown = ({cartItems}) => (<div className="cart-dropdown">
    <div className='cart-items'>
        {
            cartItems.length ?
            cartItems.map(item => <CartItem key={item.id} item={item}/>)
            : <span className="empty-message">No hay productos</span>
        }
    </div>
    <CustomButton>REALIZAR PEDIDO</CustomButton>
</div>);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);