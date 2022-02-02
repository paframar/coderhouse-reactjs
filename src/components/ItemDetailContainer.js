import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router';

import ItemDetail from './ItemDetail';
import data from '../data';

import { db } from '../FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";




const ItemDetailContainer = () => {

    // states
    const [item, setItem] = useState('');

    let itemID = useParams().id.toString();
  

    const getItem = (id) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    resolve(
                        data.filter(item => item.id === id)
                    )
            }, 2000)
        })
    }

    useEffect(()=>{
        const itemsCollection = collection(db, 'items')

        getDocs(itemsCollection).then((response) =>{
            
            response.docs.filter((doc)=>{
                
                if (doc.id === itemID){
                    setItem( {id:doc.id, ...doc.data()})
                }

            })

        })
        

    },[itemID]);

    return (
            <div className="item-detail-container">
                    {item !== {} ? <ItemDetail itemParam={item} ></ItemDetail> : <p>cargando detalle...</p> }
            </div>
    )
}

export default ItemDetailContainer;