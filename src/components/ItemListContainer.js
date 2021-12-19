import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = (props) =>{
    
    return(

            <div>
                
                <p>{props.greeting}</p>

                <div className = "item-list-container">
                    <ItemList/>
                </div>
                    
            </div>

    );
    
}

export default ItemListContainer;