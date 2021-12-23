import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

import cartContext from '../src/context/cartContext'



function App() {
  
  

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

    <Routes>

      <Route exact path="/home" element={<ItemListContainer greeting="Aquí se detallarán sus items." />}/>
      <Route exact path="/itemDetail/:id" element={<ItemDetailContainer />}/>

    </Routes>
    
    </BrowserRouter>
    
  );
}


ReactDOM.render(<App/>, document.getElementById("root"));

