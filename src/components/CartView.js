import React from 'react';
import {useContext, useEffect, useState} from 'react';

import CartItem from '../components/CartItem'

import CartContext from '../context/CartContext';

const CartView = () => {


        const cart = useContext(CartContext);

        const [message, setMessage] = useState('Cargando items...');

        useEffect(()=>{

            setTimeout(()=>{
                if (cart.length === 0){
                    setMessage('No hay items para mostrar.');
                }else{
                    setMessage('Cargando items...');
                }
            }, 3000);

        }, [cart]);


        // render function
        const renderItems = cart.map( item => {

            return (
                
                    <CartItem 
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price} 
                    />
    
            )
    
        })

        return (
            <div className="cart-view-container">
                {cart.length > 0 ? renderItems : <p>{message}</p>}
            </div>
        )
}

export default CartView; 