import React from 'react';


const CartItem = (props) => {
    
    const subTotal = props.item.price * props.item.quantity;

    return (
        <div className ="cart-view-item">
            <img  className="cart-item-img" src={props.item.imgUrl} alt="" />
            <h3>{props.item.name}</h3>
            <p> | </p>
            <p>Cantidad: <span className="cart-number">{props.item.quantity}</span></p>
            <p> | </p>
            <p>Precio unitario: $ <span className="cart-number"><b>{props.item.price}</b></span></p>
            <p> | </p>
            <p>Sub total: $ <span className="cart-number"><b>{subTotal}</b></span></p>

        </div>
    )
}

export default CartItem