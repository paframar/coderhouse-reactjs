import React from 'react';
import ItemCount from './ItemCount';

import {useState} from 'react';

const ItemListContainer = (props) =>{
    
    const [count, setCount] = useState(1);
    
    const increaseCount = (countParam, stockParam) => {

        if (countParam < stockParam){
            setCount(count+1);
        }else{
            alert("No hay mas stock!")
        }
    }
    
    const decreaseCount = (countParam, stockParam) => {

        if (countParam > 1){
            setCount(count-1);
        }else{
            alert("El valor minimo debe ser 1.")
        }
    }

    return(

            <div className = "item-list-container">
                
                <p>{props.greeting}</p>

                <ItemCount stock={5} displayValue={count} onAdd={increaseCount} onRemove={decreaseCount} />

            </div>

    );
    
}

export default ItemListContainer