import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';

import { auth } from '../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


const Navbar = (props) =>{

    const navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    const [currentUser, setCurrentUser] = useState({});

    onAuthStateChanged(auth, (currentUserParam) => {
        setCurrentUser(currentUserParam);
    });



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

                    {currentUser !== null ?
                        <button onClick={()=>routeChange('/userdashboard')} className="link-navbar">

                                <i className="material-icons">account_box</i>
                                {currentUser.email}
                
                        </button>          
                    :
                        <button onClick={()=>routeChange('/userdashboard')} className="link-navbar">

                            <i className="material-icons">key</i>
                            Ingresar
                    
                        </button>   
                    }
                    
                    <CartWidget/>
                
                </div>
                

            </div>

        </nav>

    );

};

export default Navbar;