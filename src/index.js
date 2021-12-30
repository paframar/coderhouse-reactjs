import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import SubMenuCategories from './components/SubMenuCategories';

import cartContext from '../src/context/cartContext';



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

        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/category/:category" element={<ItemListContainer />}/>

      </Routes>
    
    </BrowserRouter>
    
  );
}


ReactDOM.render(<App/>, document.getElementById("root"));

