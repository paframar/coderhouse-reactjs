import React, {useState, useEffect } from 'react';

import { auth } from '../FirebaseConfig';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import {Cart} from '../context/CartContext'
import { useContext } from 'react/cjs/react.development';


const UserLogin = (props) => {
    
    // hooks
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [currentUser, setCurrentUser] = useState({});

    const {setCart} = useContext(Cart);
    
    // updates

    onAuthStateChanged(auth, (currentUserParam) => {
        setCurrentUser(currentUserParam);
    });
    
    useEffect(()=>{

    }, [currentUser])

    // functions

    const userRegister = async (e) =>{

        e.preventDefault();

        try {
        
            const newUser = await createUserWithEmailAndPassword(auth,inputEmail,inputPassword);

            alert ('usuario registrado: ', newUser)
            
        } catch (error) {

            alert(error.message)

        }

        
    }

    const userLogin = async(e) =>{

        e.preventDefault();

        try {

            const user = await signInWithEmailAndPassword(
              auth,
              inputEmail,
              inputPassword
            );

            alert (`Usuario ${inputEmail} logueado.`)


        } catch (error) {

            alert(error.message)

        }
    
    }

    const userLogout = async(e) =>{

        e.preventDefault();

        await signOut(auth);

        alert (`Usuario deslogueado.`)

        e.target.value ='';
        setInputEmail('');
        setInputPassword('');
        setCurrentUser({});
        setCart({items:[], finalPrice:0});

    }

    return (

            <form className = "user-login-form flex-col m-10">
                

                {currentUser === null ?

                    <div className="flex-col p-10 jc-c ai-c w-100">

                        <div className="flex-col jc-fe">

                            <label className="user-login-label p-10" htmlFor="email">email</label>
                            
                            <input className="user-login-input p-10" type="email" id="email" 
                            placeholder='email'
                            autoComplete='nope'
                            onChange={(e)=>setInputEmail(e.target.value)}
                            />
                            
                        </div>

                        <div className="flex-col jc-fs">

                            <label className="user-login-label p-10" htmlFor="password">password</label>

                            <input className="user-login-input p-10" type="password" id="password" 
                            placeholder='password'
                            autoComplete='nope'
                            onChange={(e)=>setInputPassword(e.target.value)}
                            />

                        </div>

                    </div>
                :                         
                    <div className="flex-row jc-c ai-fs h-100">

                        <div className="flex-col ai-fe">
                            <p className="user-login-p p-10"> <b>User: </b></p>
                            <p className="user-login-p p-10"> <b>UID: </b></p>
                        </div>

                        <div className="flex-col ai-fs">
                            <p className="user-login-p p-10">{currentUser.email}</p>
                            <p className="user-login-p p-10">{currentUser.uid}</p>
                        </div>

                    </div>
                }

                
                <div className="flex-row m-10">
                    
                    {currentUser === null ?
                  
                        <div className="flex-row m-10">
                            <button className = "user-login-button" onClick={userLogin}>Log in</button>
                            <p className="user-login-p">Or</p>                
                            <button className = "user-login-button" onClick={userRegister}>Sign Up</button>
                        </div>                    
                    :
                        <button className = "user-login-button" onClick={userLogout}>Log Out</button> 
                    }

                </div>

            </form>

    );
};



export default UserLogin;
