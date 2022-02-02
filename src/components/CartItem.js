import React from 'react';
import { useContext, useEffect } from 'react';
import {Cart} from '../context/CartContext'

const CartItem = (props) => {

    const cartProv = useContext(Cart);
    
    const subTotal = props.item.price * props.item.quantity;

    useEffect(() => {

    }, [props.item.quantity]);

    return (
        <div className ="cart-view-item">
            <img  className="cart-item-img" src={props.item.imgUrl} alt="" />

            <h3 className="p-20">{props.item.name}</h3>

            <p className="p-20">Cantidad: <span className="cart-number">{props.item.quantity}</span></p>

            <p className="p-20">Precio unitario: $ <span className="cart-number"><b>{props.item.price.toFixed(2)}</b></span></p>

            <p className="p-20">Sub total: $ <span className="cart-number"><b>{subTotal.toFixed(2)}</b></span></p>

            <div className="flex-row jc-se ai-c">
                <button className="cart-view-item-button 
                p-10 w-50 flex-row jc-c"
                onClick={()=>{cartProv.removeFromCart(props.item, 1)}}
                ><i className="material-icons">delete</i>Eliminar</button>
                <button className="cart-view-item-button 
                p-10 w-50 flex-row jc-c"
                onClick={()=>{cartProv.addToCart(props.item, 1)}}
                ><i className="material-icons">add</i>agregar</button>
            </div>
            
        </div>
    )
}

export default CartItem