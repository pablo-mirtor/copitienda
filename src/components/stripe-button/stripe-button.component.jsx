import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H8WXOL0dxG60MS8KFurpfMEL4CMEFg317xLEGzGcA8nNKwhoeHyVoNBLPq5lnRw2SAgFrvr1FcvRspJmvr36FkE00msHrDRVp';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
    <StripeCheckout label='Pagar ahora' name='Copitienda SA'
    billingAddress shippingAddress image='' description={`El total es ${price}€`}
    currency='EUR' amount={priceForStripe} token={onToken} stripeKey={publishableKey}/>
)};

export default StripeCheckoutButton;