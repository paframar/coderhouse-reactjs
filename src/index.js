import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">

      <Navbar
        link1="Categorias"
        link2="Ofertas"
        link3="Vender"
        link4="Ayuda"
        btnContent1="Registrarse"
        btnContent2="Loguearse"
      />

    </div>
  );
}


ReactDOM.render(<App/>, document.getElementById("root"));

