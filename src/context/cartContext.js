import React from 'react'
import { useState } from 'react'

const CartProvider = (props) => {

    const [cart, setCart] = useState(
        {items:[], quantities:[], finalPrice:0}
    );

    const setFinalPrice = (arrayItemsParam, arrayQuantitiesParam) => {
        
        let finalPriceResult = 0


        for (let i = 0; i < arrayItemsParam.length; i++){

                finalPriceResult += arrayItemsParam[i].price * arrayQuantitiesParam[i]

        }

        return finalPriceResult
    }
    
    
    const isInCart = (itemID) => (cart.items.some(
        cart.items.id === itemID
    ))


    const cartAdd = (itemParam, quantityParam) => {


        let newCartItems = []
        let newCartQuantities = []

        // si no esta en el carrito
        if (!isInCart(itemParam.id)){

            // agrega el item al array de items
            newCartItems = [...cart.items, itemParam];
            
            // agrega la cantidad  al array de cantidades
            newCartQuantities = [...cart.quantities, quantityParam];     
            
        // si si esta en el carrito
        }else{
            
            newCartItems = [...cart.items];
            newCartQuantities = [...cart.quantities];

            for (let i = 0 ; i < cart.items.length ; i++){
                if (cart.items[i].id === itemParam.id){
                    cart.quantities[i] += quantityParam
                }
            }
        }

        setCart(
            newCartItems, 
            newCartQuantities, 
            setFinalPrice(newCartItems, newCartQuantities)
        )
            
    }

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartProvider;

export const CartContext = React.createContext();





    







