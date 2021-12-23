import React from 'react';


import Item from './Item';

const ItemList = ({items}) => {

    // render function
    const renderItems = items.map(items => {
        return (
            <Item 
                id={items.id} 
                name={items.name} 
                imgURL={items.imgUrl} 
                price={items.price} 
                />
        )
    })

    return (
        <div className="item-list">
            {items.length > 0 ? renderItems : <p>loading...</p> }
        </div>
    )

}

export default ItemList;