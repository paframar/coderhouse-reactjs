import React from 'react';
import {useState} from 'react';
import ItemCount from './ItemCount';

const ItemDetail = (item) =>{

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

    console.log('item detail')

    return(
        
        <div className = "item-detail">
            <img className = "item-detail-img" src={item.imgURL} alt="" />
            <h2>{item.name}</h2>
            <h3>{item.category}</h3>
            <h2>$ {item.price}</h2>
            <p>{item.description}</p>
            <ItemCount stock={5} displayValue={count} onAdd={increaseCount} onRemove={decreaseCount} />
        </div>

    )

}

export default ItemDetail;