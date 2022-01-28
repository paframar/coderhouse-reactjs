import React, {useState, useEffect } from 'react';
import { auth } from '../FirebaseConfig';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";


const UserLogin = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const [currentUser, setCurrentUser] = useState({});

    onAuthStateChanged(auth, (currentUserParam) => {
        setCurrentUser(currentUserParam);
    });

    useEffect(()=>{

    }, [currentUser])

    const userRegister = async (e) =>{

        e.preventDefault();

        try {
        
            const newUser = await createUserWithEmailAndPassword(auth,inputEmail,inputPassword);

            alert ('usuario registrado: ', newUser)
            console.log(newUser);
            
        } catch (error) {

            alert(error.message)

        }

        e.target.value ='';
        setInputEmail('');
        setInputPassword('');
        
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
            console.log('error.message :>> ', error.message);

        }

        e.target.value ='';
        setInputEmail('');
        setInputPassword('');
    
    }

    const userLogout = async(e) =>{

        e.preventDefault();

        await signOut(auth);

        alert (`Usuario deslogueado.`)

        e.target.value ='';
        setInputEmail('');
        setInputPassword('');
        setCurrentUser({});
        
    }

    return (

            <form className = "user-login-form flex-col m-10 w-50">
                
                {currentUser === null ?
                <div className="flex-row p-10 jc-c w-100">

                    <label className="p-10 w-20" htmlFor="email">email</label>
                    
                    <input className="user-login-input" type="email" id="email" 
                    placeholder='email'
                    autoComplete='nope'
                    onChange={(e)=>setInputEmail(e.target.value)}
                    />
                    
                </div>
                : null}


                {currentUser === null ?
                <div className="flex-row p-10 jc-c w-100">
                    

                    <label className="p-10 w-20" htmlFor="password">password</label>
                    <input className="user-login-input" type="password" id="password" 
                    placeholder='password'
                    autoComplete='nope'
                    onChange={(e)=>setInputPassword(e.target.value)}
                    />

                </div>
                : null}
                    
                {currentUser !== null ?                         
                <div className="flex-row jc-c ai-fs">

                    <div className="flex-col ai-fe">
                        <p className="user-login-p p-10"> <b>User: </b></p>
                        <p className="user-login-p p-10"> <b>UID: </b></p>
                    </div>

                    <div className="flex-col ai-fs">
                        <p className="user-login-p p-10">{currentUser.email}</p>
                        <p className="user-login-p p-10">{currentUser.uid}</p>
                    </div>

                </div>
                : null}

                
                <div className="flex-row m-10">
                    
                    {currentUser === null ?                         
                    <button className = "user-login-button" onClick={userLogin}>Log in</button>
                    :null}

                    {currentUser === null ? 
                    <button className = "user-login-button" onClick={userRegister}>Sign Up</button>
                    :null}

                    {currentUser !== null ?                         
                    <button className = "user-login-button" onClick={userLogout}>Log Out</button>
                    :null}


                </div>

            
            </form>

    );
};

export default UserLogin;
