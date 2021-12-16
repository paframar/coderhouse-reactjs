import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';

import Navbar from './components/Navbar';

function App() {
  return (

    <BrowserRouter>

    <Navbar
      link1="Categorias"
      link2="Ofertas"
      link3="Historial"
      link4="Ay   uda"
      btnContent1="Registrarse"
      btnContent2="Loguearse"
    />

    <Routes>

      <Route exact path="/home" element={

        
        <ItemListContainer greeting="Bienvenido. Aquí se detallarán sus items." />
      }/>

    </Routes>
    
    </BrowserRouter>
    
  );
}


ReactDOM.render(<App/>, document.getElementById("root"));

