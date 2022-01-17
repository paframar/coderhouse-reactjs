import React from 'react';

const Item = ({id, name, imgURL, price, category}) => {

    return (
        <div className="item">
            <h3>{id}</h3>
            <h2>{name}</h2>
            <h4>{category}</h4>
            <p>AR$ {price}</p>
            <img className="item-img" src={imgURL} alt="" />
            <a href= {`/item/${id}`} className="item-btn-detail" >Ver Más</a>
        </div>
    );

};

export default Item;