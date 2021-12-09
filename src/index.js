import React from 'react';
import ReactDOM from 'react-dom';
import ItemListContainer from './components/ItemListContainer';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar
        link1="Categorias"
        link2="Ofertas"
        link3="Historial"
        link4="Ayuda"
        btnContent1="Registrarse"
        btnContent2="Loguearse"
      />

      <ItemListContainer />

    </div>
  );
}


ReactDOM.render(<App/>, document.getElementById("root"));

