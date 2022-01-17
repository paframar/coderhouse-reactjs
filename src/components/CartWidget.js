import React from 'react';
import {useContext} from 'react';
import {Cart} from '../context/CartContext';

const CartWidget = () =>{

    const {cart} = useContext(Cart)
    
    return(
        <div>   
            <p>{cart.items.length}</p>
            <i className="shopping-cart material-icons">shopping_cart</i>
            
        </div>
    );
    
}

export default CartWidget