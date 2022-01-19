import React from 'react';
import {useContext} from 'react';
import {Cart} from '../context/CartContext';
import { useNavigate } from 'react-router-dom';



const CartWidget = () =>{
    
    const navigate = useNavigate();
    
    const routeChange = (path) => {
        navigate(path);
    }

    const cartProvider = useContext(Cart)
    
    return(
        <div className="cart-widget" onClick={()=>routeChange('/cart')}>   
            <p>{cartProvider.totalQuantity()}</p>
            <i className="shopping-cart material-icons">shopping_cart</i>
        </div>
    );
    
}

export default CartWidget