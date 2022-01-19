import React from 'react';
import {useContext, useEffect, useState} from 'react';

import CartItem from '../components/CartItem'

import {Cart} from '../context/CartContext';

const CartView = () => {

        const {cart}= useContext(Cart);

        const [message, setMessage] = useState('Cargando items...');

        useEffect(()=>{

            setTimeout(()=>{
                if (cart.items.length === 0){
                    setMessage('No hay items para mostrar.');
                }else{
                    setMessage('Cargando items...');
                }
            }, 3000);

        }, [cart.items.length]);

        // render function
        const renderItems = () =>  cart.items.map( cartItem => {
                return (
                    <CartItem item={cartItem}/>
                    )    
                })
                
            
            
        return (
            <div className="cart-view-container">
                <h2 className="cart-view-title">Tu compra</h2>
                {cart.items.length > 0 ? 
                    renderItems() 
                    :
                    <p className ="cart-view-message">{message}</p>}
                <h3 className = "cart-view-final-price">TOTAL:  ${cart.finalPrice.toFixed(2)}</h3>
            </div>
        )
}

export default CartView; 