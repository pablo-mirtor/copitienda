import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Producto</span>
            </div>
            <div className="header-block">
                <span>Descripción</span>
            </div>
            <div className="header-block">
                <span>Cantidad</span>
            </div>
            <div className="header-block">
                <span>Precio</span>
            </div>
            <div className="header-block">
                <span>Quitar</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className="total">
            <span>TOTAL: {total}€</span>
        </div>
        <div className ='test-warning'>
            *Por favor, utiliza la tarjeta de crédito de prueba <br/>
            4242 4242 4242 4242 - Exp: 10/23 - CVC: 123*
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
}); 

export default connect(mapStateToProps)(CheckoutPage);