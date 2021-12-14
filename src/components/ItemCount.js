
import React from 'react';


const ItemCount = ({displayValue, stock, onAdd, onRemove}) => {
    
    
    return (

        <div className="item-count">

            <div className="item-count-viewer"></div>
            
            <div className="item-count-add-ui">

                {/* boton - */}
                <button className="item-count-add-ui-button" onClick= {()=>onRemove(displayValue, stock)} > - </button>
                
                {/* resultado */}
                <div className="item-count-add-ui-viewer">{displayValue}</div>

                {/* boton + */}
                <button className="item-count-add-ui-button" onClick= {()=>onAdd(displayValue, stock)} > + </button>

            </div>

            <button className="item-count-button">Agregar</button>
            
        </div>
    );


};

export default ItemCount;