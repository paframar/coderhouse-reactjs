// libs
import React from 'react';
import ReactDOM from 'react-dom';

// hooks
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useContext } from 'react';

// components
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CartView from './components/CartView';
import CartPayment from './components/CartPayment';

import UserDashboard from './components/UserDashboard';

import CartContext, { Cart } from './context/CartContext';

import OrderPlaced from './components/OrderPlaced';


function App() {

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
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<CartView/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/payment" element={<CartPayment/>} />
          <Route exact path="/userdashboard" element={<UserDashboard/>} />
          <Route exact path="/orderplaced" element={<OrderPlaced/>} />
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

