import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderPlaced = () => {
    
    const navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path)
    }

    return (
        <div className="order-placed-container flex-col jc-sb ai-c">

            <h2 className="order-placed-title m-10">¡Orden dada de Alta!</h2>

            
            <p className="order-placed-sub-title m-10">Su orden fue correctamente dada de alta.</p>
            
            <button onClick= {()=>{routeChange('/')}} className="order-placed-button">Ver sus órdenes</button>

        </div>
    )

};

export default OrderPlaced;
