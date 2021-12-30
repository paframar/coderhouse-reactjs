import React from 'react';
import CartWidget from './CartWidget';

const Navbar = (props) =>{

    const handleClickCategories = (e) => {
        window.dispatchEvent('clickCategories');
    }

    window.addEventListener('clickCategories', ()=>{
        console.log('hola');
    })
    
    return(

        <nav>

            <div className="navbar">

                <i className="logo center material-icons">cloud</i>
                
                <h2> <a className="nav-brand" href="/"> cloudcommerce.com </a> </h2>

                <ul>

                    <li><button className="link-navbar" onClick={handleClickCategories}>
                    <i className="center material-icons">home</i>{props.link1}</button></li>

                    <li><button className="link-navbar" href="badges.html">
                    <i className="center material-icons">whatshot</i>{props.link2}</button></li>

                    <li><button className="link-navbar" href="collapsible.html">
                    <i className="center material-icons">watch_later</i>{props.link3}</button></li>

                    <li><button className="link-navbar" href="collapsible.html">
                    <i className="material-icons">help</i>{props.link4}</button></li>
                    
                </ul>


                <div className="nav-btns-container">

                    <button href="/home" className="link-navbar"><i className="material-icons right">account_circle</i>
                        {props.btnContent1}</button>
                    
                    <button href="/" className="link-navbar"><i className="material-icons right">create</i>{props.btnContent2}</button>          

                    <CartWidget/>
                
                </div>
                

            </div>

        </nav>

    );

};

export default Navbar;