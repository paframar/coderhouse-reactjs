import React from 'react';


import Item from './Item';

const ItemList = ({items}) => {

    // render function
    const renderItems = items.map(item => {

        return (

                <Item 
                    key={item.id.toString()}
                    id={item.id} 
                    name={item.name} 
                    imgURL={item.imgUrl} 
                    price={item.price} 
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