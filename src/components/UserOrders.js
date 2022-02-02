
import React, { useState, useEffect } from 'react';

import { db } from '../FirebaseConfig';
import { auth } from '../FirebaseConfig';

import  { collection, getDocs } from "firebase/firestore";
import Order from './Order'

const UserOrders = () => {

    const [Orders, setOrders] = useState([]);

    const [currPage, setCurrPage] = useState(1);

    const [pages, setPages] = useState(1);

    // TODO: not-fixed ordersPerPage
    const [ordersPerPage, setOrdersPerPage] = useState(5);

    
    useEffect(()=>{
        const numberOfPages = getNumberOfPages();
        setPages(numberOfPages);
    }, [pages, Orders])

    useEffect(()=>{
        
        if(auth.currentUser !== null) {
            getOrders();
        }
        const numberOfPages = getNumberOfPages();
        setPages(numberOfPages);
        
    }, [])

    
    const backPage =  () => {
        if (currPage > 1){ setCurrPage(currPage-1) }
    }
    
    const forwardPage =  () => {
        if (currPage < pages) {setCurrPage(currPage+1)}
    }

    const getNumberOfPages = () => {
        const ordersLength = Orders.length;
        let numberOfPages = 1;
        
        if (ordersLength % ordersPerPage === 0){
            numberOfPages= ordersLength / ordersPerPage
         }else{
            numberOfPages=parseInt(ordersLength / ordersPerPage) + 1
         } 

        return numberOfPages
    }

    
    const getOrders =  () => {
        
        const userOrdersCollection = collection(db, 'orders');

        getDocs(userOrdersCollection).then((response)=>{

            let authID = auth.currentUser.uid;

            const userOrders = response.docs.filter(order => {
                    if (order.data().user.uid === authID){
                        return {id:order.id, ...order.data()};
                    }
                } 
            )

            setOrders(userOrders)
            

        })

    }


    const showOrders = (orderIDParam, indexOrderParam) => {

        let lastIndexOfPage = (ordersPerPage * currPage)-1; 
        let firstIndexOfPage = lastIndexOfPage -4;

        if ((indexOrderParam >= firstIndexOfPage) && (indexOrderParam <= lastIndexOfPage)){

            return (
                <Order id={orderIDParam} />
                )
        
        }

    }


    return (
        <div className ='user-orders-form flex-col jc-fs ai-c m-10'>

            <div className="flex-row jc-c ai-c">

                <h2 className="p-20">Orders</h2>

                <button className="user-orders-button"
                onClick={backPage}>
                    <i className="w-10 material-icons user-orders-icon">arrow_back_ios_new_icon</i>
                </button>

                <p className="user-orders-p">
                    Página {currPage} de {pages}
                </p>
                
                <button className="user-orders-button"
                onClick={forwardPage}>
                    <i className="w-10 material-icons user-orders-icon">arrow_forward_ios_icon</i>
                </button>

            </div>

            {Orders.length > 0 ?
                Orders.map((currOrder, indexOrder)=>(
                    showOrders(currOrder.id, indexOrder, currOrder)
                ))
            :
                <p>
                    No tenés órdenes de compra ingresadas.
                </p>
            
            }

        </div>
    );
};

export default UserOrders;
