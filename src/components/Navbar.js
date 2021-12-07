import React from 'react';

const Navbar = () =>{
    
    return(
        <nav>
            <div className="nav-wrapper">

                <i className="fas fa-shopping-bag medium"/>
                
                <a href="#!" className="brand-logo center">cloud-commerce</a>

                <ul className="right">

                    <li><a href="sass.html"><i className="center material-icons">search</i>Buscar</a></li>

                    <li><a href="badges.html"><i className="center material-icons">whatshot</i>Ofertas</a></li>

                    <li><a href="collapsible.html"><i className="center material-icons">watch_later</
                    i>Historial</a></li>

                    <li><a className="center" href="collapsible.html"><i className="material-icons">notifications</
                    i>Notificaciones</a></li>

                    <a href="/" className="center waves-effect waves-light btn-medium"><i className="material-icons right">account_circle</i>Ingresar</a>
                   
                    <a href="/" className="center waves-effect waves-light btn-medium"><i className="material-icons right">create</i>Registrarse</a>          

                </ul>
            </div>
        </nav>
    );

};

export default Navbar;