import React from 'react';
import CartWidget from './CartWidget';

const Navbar = (props) =>{
    
    return(
        <nav>
            <div className="navbar">

                <i className="logo center material-icons">cloud</i>
                
                <h2>cloudcommerce.com</h2>

                <ul className="right">

                    <li className="navbar-li"><a className="link-navbar" href="sass.html"><i className="center material-icons">search</i>
                    {props.link1}</a></li>

                    <li className="navbar-li"><a className="link-navbar" href="badges.html"><i className="center material-icons">whatshot</i>
                    {props.link2}</a></li>

                    <li className="navbar-li"><a className="link-navbar" href="collapsible.html"><i className="center material-icons">watch_later</i>
                    {props.link3}</a></li>

                    <li className="navbar-li"><a className="link-navbar" href="collapsible.html"><i className="material-icons">help</i>
                    {props.link4}</a></li>
                    
                </ul>


                <div className="nav-btns-container">

                    <a href="/" className="btn-navbar"><i className="material-icons right">account_circle</i>
                        {props.btnContent1}</a>
                    
                    <a href="/" className="btn-navbar"><i className="material-icons right">create</i>{props.btnContent2}</a>          

                    <CartWidget/>
                
                </div>
                

            </div>
        </nav>

);

};

export default Navbar;