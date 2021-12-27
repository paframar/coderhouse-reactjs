import React from 'react';
import {useState} from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({itemParam}) =>{

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

    const renderItemDetail = (itemParam) => {
        
        return (
        
            <div className="item-detail">

                <img src={itemParam.imgUrl} alt="" />

                <div className="item-detail-div-right">

                    <h4>{itemParam.id}</h4>
                    <h2>{itemParam.name}</h2>
                    <h3>{itemParam.category}</h3>
                    <h2>$ {itemParam.price}</h2>
                    <p>{itemParam.description}</p>
                    
                    <div className="item-detail-div-ui">
                        <ItemCount stock={5} displayValue={count} onAdd={increaseCount} onRemove={decreaseCount} />
                    </div>

                </div>
                
            </div>
    
        )
    }

    return(

        <div>
            {itemParam !== '' ? renderItemDetail(itemParam) : <p>cargando Item . . . .</p>}
        </div>
        
    )

}

export default ItemDetail;