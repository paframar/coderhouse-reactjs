import React from 'react';
import {useState, useEffect} from 'react';
import Item from './Item';


const ItemList = ({items}) => {

    const [message, setMessage] = useState('Cargando items...');

    useEffect(()=>{

        setTimeout(()=>{
            if (items.length === 0){
                setMessage('No hay items para mostrar.');
            }else{
                setMessage('Cargando items...');
            }
        }, 3000);

    }, [items]);
        

    // render function
    const renderItems = items.map( item => {

        return (
            
                <Item 
                    key={item.id.toString()}
                    id={item.id} 
                    name={item.name} 
                    category={item.category} 
                    imgURL={item.imgUrl} 
                    price={item.price} 
                />
            
        )

    })
                
    


    return (
        <div className="item-list">
            {items.length > 0 ? renderItems : <p>{message}</p>}
        </div>
    )

}

export default ItemList;