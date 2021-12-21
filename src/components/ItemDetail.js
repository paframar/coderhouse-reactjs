import React from 'react';

const ItemDetail = (item) =>{

    return(
        
        <div className = "item-detail">
            <img className = "item-detail-img" src={item.imgURL} alt="" />
            <h2>{item.name}</h2>
            <h3>{item.category}</h3>
            <h2>$ {item.price}</h2>
            <p>{item.description}</p>
        </div>
    )

}

export default ItemDetail;