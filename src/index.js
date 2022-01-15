// libs
import React from 'react';
import {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';

// hooks
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CartView from './components/CartView'

// context
import CartContext from '../src/context/CartContext';



function App() {

  const [cart, setCart] = useContext(CartContext);
  
  return (
    
    <BrowserRouter>

        <Navbar
          link1="Categorias"
          link2="Ofertas"
          link3="Historial"
          link4="Ayuda"
          btnContent1="Registrarse"
          btnContent2="Loguearse"
          />

        <CartContext.Provider value ={[cart, setCart]}>
       
            <Routes>

              <Route exact path="/" element={<ItemListContainer />}/>
              <Route exact path="/cart" element={<CartView/>}/>
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/category/:category" element={<ItemListContainer />}/>

            </Routes>
        
        </CartContext.Provider>
          
      </BrowserRouter>


  );
}


ReactDOM.render(<App/>, document.getElementById("root"));

