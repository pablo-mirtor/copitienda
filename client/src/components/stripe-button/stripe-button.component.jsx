import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H8WXOL0dxG60MS8KFurpfMEL4CMEFg317xLEGzGcA8nNKwhoeHyVoNBLPq5lnRw2SAgFrvr1FcvRspJmvr36FkE00msHrDRVp';
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response =>{
            alert('Payment successful').catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert('Ha habido un error con el pago');
            })
        })
    }
    return(
    <StripeCheckout label='Pagar ahora' name='Copitienda SA'
    billingAddress shippingAddress image='' description={`El total es ${price}€`}
    currency='EUR' amount={priceForStripe} token={onToken} stripeKey={publishableKey}/>
)};

export default StripeCheckoutButton;