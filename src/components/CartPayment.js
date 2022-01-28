import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../context/CartContext';
import PaymentResumeItem from './PaymentResumeItem';

import FirebaseConfig, {db} from '../FirebaseConfig';
import {collection, 
        getDocs, 
        getDoc, 
        query, 
        doc,
        addDoc, 
        deleteDoc, 
        updateDoc} from "firebase/firestore";

import { auth } from '../FirebaseConfig';

import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

const CartPayment = () => {

    // hooks
    const navigate = useNavigate();
    const {cart} = useContext(Cart);

    // states

    const [currentUser, setCurrentUser] = useState({});

    const [Order, setOrder] = useState(
        {   
            user:{uid:'', email: ''},
            buyer:{name:'', adress:'', phone:'', obs:''},
            cart: {items: cart.items, finalPrice: cart.finalPrice}
        });



    onAuthStateChanged(auth, (currentUserParam) => {
        setCurrentUser(currentUserParam);
    });


    // functions

    const routeChange = (path) =>{
        navigate(path);
    }
    
    // ORDERS CRUD Functions
    const placeOrder = () => {
        addDoc(collection(db, 'orders'), Order)
    }

    const insertBuyerData = (e) => {

        const targetID = e.target.id;

        console.log('targetID: ', targetID);

        const order = Order;

        switch (targetID) {
            case 'name':
                order.buyer.name = e.target.value;
                break;
                
                case 'adress':  
                    order.buyer.adress = e.target.value;
                    break;
                
                case 'phone':
                    order.buyer.phone = e.target.value;
                    break;
                    
                case 'obs':
                    order.buyer.obs = e.target.value;
                    break;

                case 'place-order-button':
                    order.user.uid = currentUser.uid;
                    order.user.email = currentUser.email;
                    break;

            default:
                break;
        }

        setOrder(order);
        
    }

    const renderItems = () =>  cart.items.map( cartItem => {
    return (
        <PaymentResumeItem item={cartItem} />
        )    
    })


    return (
        <div className="cart-view-container flex-col">

            <div className="cart-view-container flex-row no-shadow ">

                <div className="cart-view-container flex-col no-shadow">
                    
                    <div className="cart-view-container flex-col no-shadow">
                        <h3 className="cart-payment-sub-title">Información de Orden</h3>
                        
                        <form className="cart-payment-form flex-row">

                            <div className="flex-col ai-fe">
                                <p className="cart-payment-p p-10"> User </p>
                                <p className="cart-payment-p p-10"> UID </p>
                                <p className="cart-payment-p p-10"> Nombre </p>
                                <p className="cart-payment-p p-10"> Domicilio </p>
                                <p className="cart-payment-p p-10"> Telefono </p>
                                <p className="cart-payment-p p-10"> Observaciones </p>
                                
                            </div>

                            <div className="flex-col ai-fs">
                                <p className="cart-payment-p p-10">{currentUser.email}</p>
                                <p className="cart-payment-p p-10">{currentUser.uid}</p>
                                
                                <input type="text" id="name" Placeholder="Quien recibirá el pedido" 
                                className="cart-payment-input"
                                onChange= { (e)=> {insertBuyerData(e)} } />
                                
                                <input type="text" id="adress" Placeholder="Domicilio de entrega" 
                                className="cart-payment-input"
                                onChange= { (e)=> {insertBuyerData(e)} } />
                                
                                <input type="text" id="phone" Placeholder="Teléfono de contacto" 
                                className="cart-payment-input"
                                onChange= { (e)=> {insertBuyerData(e)} } />

                                <textarea name="observations" id="obs" ç
                                Placeholder="Observaciones" className="cart-payment-textarea"
                                onChange= { (e)=> {insertBuyerData(e)} } ></textarea>
                            </div>

                        </form>

                    </div>

                    <div className="cart-view-container flex-col no-shadow">

                        <h3 className="cart-payment-sub-title">Medios de Pago</h3>
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
                <button className="cart-view-button" id="place-order-button" 
                    onClick={(e)=>{insertBuyerData(e); placeOrder(); routeChange('/orderplaced')}}>Crear Orden de Compra</button>
                <button className="cart-view-button" onClick={()=>{console.log(Order);}}>ver Order</button>
                <button className="cart-view-button" onClick={()=>{console.log(currentUser);}}>ver current user</button>
            </div>
            
        </div>
    )
}

export default CartPayment;