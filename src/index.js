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

import Context from './context/CartContext';
import { Cart } from './context/CartContext';




function App() {

  const value = useContext(Cart);

  return (
    
    <Cart.Provider value = {value}>
      
      <BrowserRouter>

        <Navbar
        link1="Categorias"
        link2="Ofertas"
        link3="Historial"
        link4="Ayuda"
        btnContent1="Registrarse"
        btnContent2="Loguearse"
        />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/cart" element={<CartView/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />}/>
          <Route exact path="/payment" element={<CartPayment/>}/>
        </Routes>  

      </BrowserRouter>

    </Cart.Provider>

  )
}



ReactDOM.render(

<Context>
  <App/>
</Context>

, document.getElementById("root"));

