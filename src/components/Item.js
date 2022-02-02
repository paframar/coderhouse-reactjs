import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({id, name, imgURL, price, category}) => {

    // hooks
    const navigate = useNavigate();

    // functions
    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <div className="item">
            <h2 className="item-title">{name}</h2>
            <h4>{category}</h4>
            <p>$ {price}</p>
            <img className="item-img" src={imgURL} alt="" />
            <button className="item-btn-buy" onClick={()=>routeChange(`/item/${id}`)}>Comprar</button>
        </div>
    );

};

export default Item;