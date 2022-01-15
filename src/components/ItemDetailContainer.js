import React from 'react';
import {useState} from 'react';
import {useParams} from 'react-router';
import {useEffect} from 'react';

import ItemDetail from './ItemDetail';
import data from '../data';

const ItemDetailContainer = () => {

    // inicializa el item que va a mostrar como ""
    const [item, setItem] = useState('');
    
    // toma el id de la URL
    let itemID = useParams();
    
    // pasa a number ese ID
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
    
    // let order ={
    //     buyer:{name:'pablo', phone:5555555, email:'email@mail.com'},
    //     items:[
    //         {id:1, title:'camisa', price:20},
    //         {id:2, title:'pantalon', price:10},
    //         {id:3, title:'medias', price:5}
    //     ],
    //     total:35
    // }

    useEffect(()=>{
            
        const promise = getItem(itemID);
        promise.then(itemResult => {
            setItem(itemResult[0]);
        });

    },[itemID]);


    return (
        <div className="item-detail-container">
            {item !== {} ? <ItemDetail itemParam={item} ></ItemDetail> : <p>cargando detalle...</p> }
        </div>
    )
}

export default ItemDetailContainer;