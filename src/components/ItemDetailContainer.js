import React from 'react';
import {useState} from 'react';
import {useParams} from 'react-router';
import {useEffect} from 'react';

import ItemDetail from './ItemDetail';
import data from '../data';

const ItemDetailContainer = () => {

    const [item, setItem] = useState('');
    
    // petición al server
    
    let itemID = useParams();

    itemID = Number(itemID.id);
    
    
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
            
        const promise = getItem(itemID);
        promise.then(itemResult => {
            setItem(itemResult[0]);
            console.log('estado:', item);
        });

    }, [item]);


    // console.log(item);
    
    // let renderItemDetail = ()=>{
    //     return <ItemDetail Item={item}/>  
    // }

    return (
        <div className="item-detail-container">
            {item !== {} ? <ItemDetail itemParam={item} ></ItemDetail> : <p>cargando detalle...</p> }
        </div>
    )
}

export default ItemDetailContainer;