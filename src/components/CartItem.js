import React from 'react';

const CartItem = (props) => {

    return (
        <div className ="cart-view-item">
            <h2>{props.name}</h2>
            <p>{props.quantity}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default CartItem