import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import Item from './Item';
import data from '../data';

const ItemList = () => {

    const [products, setProducts] = useState([]);

    // render inicial
    useEffect(()=>{
        console.log('useEffect - render')
        const promise = getProducts();
        promise.then(result => {setProducts(result); console.log(result)})
    }, [])

    // para cuando cambie products
    useEffect(()=>{
        console.log('useEffect2 - cambio products')
        console.log('este es mi estado: ', products)
    }, [products])

    // petición al server
    const getProducts = () => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    resolve(data)
            }, 2000)
        })
    }

    // render function
    const renderItems = products.map(product => {
        return (
            <Item 
                id={product.id} 
                name={product.name} 
                imgURL={product.imgUrl} 
                price={product.price} 
                />
        )
    })

    return (
        
        <div className="item-list">
            {products.length > 0 ? renderItems : <p>loading...</p> }
        </div>
    )

}

export default ItemList;