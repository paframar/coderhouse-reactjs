import { createContext, useState, useEffect } from "react";

export const Cart = createContext();

const Context = ({children}) => {
    
    const [cart, setCart] = useState({items:[], finalPrice:0});


    const setFinalPrice = (arrayItemsParam) => {
        let finalPrice = 0;
        arrayItemsParam.map((cartItem)=>(
            finalPrice += cartItem.quantity * cartItem.price
        ))
        return finalPrice
    }
    const isInCart = (itemIDParam) => {
        cart.items.some((cartItem) => cartItem.id === itemIDParam);
    }


    const addToCart = (itemParam, quantityParam) => {
        
        // si el producto esta agregado al carrito
        if (isInCart(itemParam.id)){

           let newCartItems = [...cart.items]
           
           newCartItems.map(cartItem => (
               (cartItem.id === itemParam.id) ? cartItem.quantity += quantityParam : null
           ))

           setCart({
               items: newCartItems,
               finalPrice: setFinalPrice(newCartItems)
            });

        // si el producto NO esta agregado en el carrito
        }else{

            // estructura un nuevo objeto
            let newCartItem = itemParam;
            
            // agrega la propiedad 'quatity' al objeto
            Object.defineProperty(newCartItem, 'quantity', {
                value: quantityParam,
                writable: true,
                enumerable: true,
                configurable: true
            });

            const newCartItems = [...cart.items, newCartItem]

            console.log('newCartItems: ', newCartItems)

            setCart({
                items: newCartItems,
                finalPrice: setFinalPrice(newCartItems)
             });


            console.log('----NUEVO OBJETO AGREGADO----')
            console.log('newCartItem:', newCartItem)
            console.dir('quantityParam: ', newCartItem.quantity)
            console.log('CART ITEMS:', cart.items)
            console.log('CART FINAL PRICE:', cart.finalPrice)
            console.log('CART LENGHT: ', cart.items.length)
        }


        
    }

    return (
        <Cart.Provider 
        value = {{cart, setCart, addToCart}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;