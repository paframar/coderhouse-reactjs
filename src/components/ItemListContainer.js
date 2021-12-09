import React from 'react';

const ItemListContainer = (props) =>{
    
    return(

            <div className = "item-list-container">
                <p>{props.greeting}</p>
            </div>

    );
    
}

export default ItemListContainer