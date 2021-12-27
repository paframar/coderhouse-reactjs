import React from 'react';
import {useEffect, useState} from 'react';
import ItemList from './ItemList';
import data from '../data'


const ItemListContainer = (props) =>{

    // funcion que simula petición al server
    const getItems = () => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    resolve(data)
            }, 2000)
        })
    }

    const [items, setItems] = useState([]);

    // render inicial
    useEffect(()=>{
        const promise = getItems();
        promise.then(result => {setItems(result); console.log(result)})
    });

    
    
    return(

            <div>
                
                <div className = "item-list-container">
                    <ItemList items={items}/>
                </div>
                    
            </div>

    );
    
}

export default ItemListContainer;