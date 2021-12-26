import React from 'react';
import {useState} from 'react';
import {useParams} from 'react-router';
import {useEffect} from 'react';

import ItemDetail from './ItemDetail';
import data from '../data';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    
    let itemID = useParams();

    useEffect(()=>{
        const promise = getItem({itemID});
        promise.then(item => {setItem(item)});
    }, [itemID])

    // petición al server
    const getItem = (id) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    resolve(
                        data.filter(item => data.id === id)
                    )
            }, 2000)
        })
    }

    console.log(item);
    
    let renderItemDetail = ()=>{
        return <ItemDetail Item={item}/>  
    }


    return (
        <div className="item-detail-container">
            {data.length > 0 ? renderItemDetail : <p>cargando detalle...</p> }
        </div>
    )
}

export default ItemDetailContainer;