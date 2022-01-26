import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../context/CartContext';
import PaymentResumeItem from './PaymentResumeItem';

import FirebaseConfig, {db} from '../FirebaseConfig';
import {collection, getDocs, getDoc, query, doc, addDoc, deleteDoc, updateDoc} from "firebase/firestore";


const CartPayment = () => {

    const navigate = useNavigate();
    
    const routeChange = (path) =>{
        navigate(path);
    }
    
    const {cart} = useContext(Cart);

    const placeOrder = () => {

        let orderToPlace = {
            buyer: {name:"Pablo Marconi", phone:"555-5555", email:"pablo@gmail.com"},
            items: cart.items,
            finalPrice: cart.finalPrice
        }

        addDoc(collection(db, 'orders'), orderToPlace);
    }

    // render function
    const renderItems = () =>  cart.items.map( cartItem => {
    return (
        <PaymentResumeItem item={cartItem} />
        )    
    })

    return (
        <div className="cart-view-container flex-col">

            <div className="cart-view-container flex-row">

                <div className="cart-view-container flex-col">
                    
                    <div className="cart-view-container flex-col no-shadow">
                        <h3 className="cart-view-sub-title">Información de Orden</h3>
                        <p> Nombre: </p>
                        <p> Email: </p>

                    </div>

                    <div className="cart-view-container flex-col no-shadow">

                        <h3 className="cart-view-sub-title">Medios de Pago</h3>
                        <p> Tarjeta de Débito </p>
                        <p> Tarjeta de Crédito </p>

                    </div>

                </div>

                <div className="cart-view-container flex-col">

                    <h2 className="cart-view-title">Resumen de compra</h2>
                    {renderItems()}

                    <h3 className = "cart-view-final-price">TOTAL:  ${cart.finalPrice.toFixed(2)}</h3>
                
                </div>

                

            </div>

            <div className="cart-view-buttons-container">
                <button className="cart-view-button" onClick={()=>routeChange('/cart')}>Volver al Carrito</button>
                <button className="cart-view-button" onClick={()=>placeOrder()}>Finalizar Compra</button>
            </div>
            
            


        </div>
    )
}

export default CartPayment;