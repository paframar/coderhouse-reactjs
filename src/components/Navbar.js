import React from 'react';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';


const Navbar = (props) =>{

    const navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    return(

        <nav>

            <div className="navbar">

                <i className="logo center material-icons">cloud</i>
                <i className="center material-icons"></i>
                <h2> <button className="nav-brand" onClick={()=>routeChange('/')}> cloudcommerce.com </button> </h2>

                <ul>

                    <li><button className="link-navbar" onClick={()=>routeChange('/')}>
                    <i className="center material-icons">home</i>{props.link1}</button></li>

                    <li><button className="link-navbar" onClick={()=>routeChange('/')} >
                    <i className="center material-icons">whatshot</i>{props.link2}</button></li>

                    <li><button className="link-navbar" onClick={()=>routeChange('/')}>
                    <i className="center material-icons">watch_later</i>{props.link3}</button></li>

                    <li><button className="link-navbar" onClick={()=>routeChange('/')}>
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