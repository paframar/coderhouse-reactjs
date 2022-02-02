// libs
import React from 'react';
import ReactDOM from 'react-dom';

// hooks
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useContext, useEffect } from 'react';

// components
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CartView from './components/CartView';
import CartPayment from './components/CartPayment';
import UserDashboard from './components/UserDashboard';
import CartContext, { Cart } from './context/CartContext';
import OrderPlaced from './components/OrderPlaced';

import data from './data'
import { db } from './FirebaseConfig'
import  { collection, addDoc, getDocs } from "firebase/firestore";





function App() {
  
  useEffect(() => {
      loadProductsToFirebase();
  }, []);

  const loadProductsToFirebase = () => {
    const itemsCollection = collection(db, 'items');

    getDocs(itemsCollection).then((response) => {

      if (response.docs.length === 0){
        data.map((item)=>(
          addDoc(itemsCollection, item)
        ))  
        alert ('La base de datos de productos fue actualizada.')
      }
        
    })

  }

  const cartContextValue = useContext(Cart);

  return (
    
    <Cart.Provider value = {cartContextValue}>
      
      <BrowserRouter>

        <Navbar
        link1="Categorias"
        link2="Ofertas"
        link3="Historial"
        link4="Ayuda"
        />

        <Routes>
          <Route exact path="/categories" element={<ItemListContainer categories='show'/>} />
          <Route exact path="/" element={<ItemListContainer categories='hide'/>} />
          <Route exact path="/cart" element={<CartView/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer categories='show'/>} />
          <Route exact path="/payment" element={<CartPayment/>} />
          <Route exact path="/userdashboard" element={<UserDashboard goPayment='no'/>} />
          <Route exact path="/userdashboard/needed" element={<UserDashboard goPayment='yes'/>} />
          <Route exact path="/orderplaced/:id" element={<OrderPlaced/>} />
        </Routes>  

      </BrowserRouter>

    </Cart.Provider>



  )
}

ReactDOM.render(
    <CartContext>
      <App/>
    </CartContext>
, document.getElementById("root"));

