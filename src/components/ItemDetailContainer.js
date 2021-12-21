import React from 'react';
import {useState} from 'react';
import {useParams} from 'react';
import {useEffect} from 'react';

import ItemDetail from './ItemDetail';
import data from '../data';


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();
    
    useEffect(()=>{
        const promise = getItem({id});
        promise.then(item => {setItem(item)});
    }, [id])

    // petición al server
    const getItem = (id) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    resolve(
                        data.filter(id => data.id === id)
                    )
            }, 2000)
        })
    }
    
    const renderItemDetail = ()=>{
        return (<ItemDetail Item={item}/>)  
    }


    return (
        <div className="item-detail-container">
            {data.length > 0 ? renderItemDetail : <p>cargando detalle...</p> }
        </div>
    )
}

export default ItemDetailContainer;