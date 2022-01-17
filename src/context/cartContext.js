import { createContext, useState, useEffect } from "react";

export const Cart = createContext();

const Context = ({children}) => {
    
    const [cart, setCart] = useState({items:[], finalPrice:0});

    useEffect(()=>{
        cart.items.map((item)=>{
            console.log('------------------')
            console.log(item.id)
            console.log(item.name)
            console.log(item.price)
            console.log(item.quantity)
            console.log('------------------')
        })
        console.log(cart.finalPrice)
    }, [cart])

    const setFinalPrice = (arrayItemsParam) => {
        let finalPrice = 0;
        arrayItemsParam.map((cartItem)=>(
            finalPrice += cartItem.quantity * cartItem.price
        ))
        return finalPrice
    }

    const isInCart = (itemIDParam) => {
        console.log('buscando objeto de id = ', itemIDParam);

        cart.items.map((cartItem) => {
            if (cartItem.id === itemIDParam){
                console.log('fue encontrado')
                return true
            }
        });
        console.log('no fue encontrado')
        return false

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
            
            // agrega la propiedad 'quantity' al objeto
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