import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useParams} from 'react';

import ItemCount from './ItemCount';

import data from '../data';

const productos = data;

const Item = () => {
    
    // ..........................................

    const [count, setCount] = useState(1);

    const increaseCount = (countParam, stockParam) => {

        if (countParam < stockParam){
            setCount(count+1);
        }else{
            alert("No hay mas stock!")
        }
    }
    
    const decreaseCount = (countParam) => {

        if (countParam > 1){
            setCount(count-1);
        }else{
            alert("El valor minimo debe ser 1.")
        }
    }

    // ..........................................

    const [products, setProducts]=useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        const promise = getItems()
        promise.then(json=> {setProducts(json)})
    }, [id, products])

    const getItems = () => {

        const promise = new Promise((resolve, reject) =>{

            setTimeout(()=>{
                resolve(productos);
            }, 3000)

        })

        return promise

    }
  
    return (
        <div className="item">

          
            <ItemCount stock={5} displayValue={count} onAdd={increaseCount} onRemove={decreaseCount} />
        </div>
    );

};

export default Item;