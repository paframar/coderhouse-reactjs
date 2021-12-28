import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ItemList from './ItemList';
import data from '../data'


const ItemListContainer = () =>{

    let params = useParams();

    // trae todos los items para el route "/"
    const getItems = (params) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    if(params.category !== undefined){
                        resolve(data.filter(item=> item.category.toLowerCase() === params.category.toLowerCase()));
                    }else{
                        resolve(data)
                    }
                }, 2000)
            })
        }
        
        const [items, setItems] = useState([]);
        
        // render inicial
        useEffect(()=>{
        console.log('useEfect...')
        const promise = getItems(params);
        promise.then(resolved => {setItems(resolved)})
    }, [params]);

    return(

            <div>
                
                <div className = "item-list-container">
                    <ItemList items={items}/>
                </div>
                    
            </div>

    );
    
}

export default ItemListContainer;