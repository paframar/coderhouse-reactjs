import React from 'react';

import ItemDetailContainer  from './ItemDetailContainer';   


const renderDetail = () =>{

    return (
        <ItemDetailContainer/>
    )
}

const Item = ({id, name, imgURL, price}) => {

    return (
        <div className="item">
            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <img className="item-img" src={imgURL} alt="" />
            <a href= {`/itemDetail/${id}`} className="item-btn-detail" onClick={renderDetail} >Ver Más</a>
        </div>
    );

};

export default Item;