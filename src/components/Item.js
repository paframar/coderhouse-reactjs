import React from 'react';
import {useState} from 'react';
import ItemCount from './ItemCount';

const Item = ({id, name, imgURL, price}) => {

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
  
    return (
        <div className="item">
            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <img className="item-img" src={imgURL} alt="" />
            <ItemCount stock={5} displayValue={count} onAdd={increaseCount} onRemove={decreaseCount} />
        </div>
    );

};

export default Item;