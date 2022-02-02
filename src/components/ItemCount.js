import React from 'react';

const ItemCount = ({displayValue, stock, onAdd, onRemove}) => {

    return (
        <div>

        <div className="item-count">

            <div className="item-count-viewer"></div>
            
            <div className="flex-row item-count-add-ui">

                <button className="item-count-button" onClick= {()=>onRemove(displayValue)} > - </button>
                
                <div className="item-count-add-ui-viewer">{displayValue} / {stock}</div>



                <button className="item-count-button" onClick= {()=>onAdd(displayValue, stock)} > + </button>

            </div>

        </div>

            

            
        </div>
    );


};

export default ItemCount;