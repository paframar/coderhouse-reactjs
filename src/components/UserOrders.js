
import React, { useState, useEffect } from 'react';

import firebase, { db } from '../FirebaseConfig';
import { auth } from '../FirebaseConfig';

import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc, onSnapshot} from "firebase/firestore";

const UserOrders = () => {

    const [Orders, setOrders] = useState([]);

    useEffect(() => {

    }, []);
    


    
    const getOrders = async () => {
        
     

    }


    return (
        <div className ='user-orders-form jc-sb flex-col m-10 w-75'>

            <h2 className="p-20">Orders</h2>

            <button className="user-orders-button p-20"
            onClick={()=>{getOrders();}}>getOrders!</button>


        </div>
    );
};

export default UserOrders;
