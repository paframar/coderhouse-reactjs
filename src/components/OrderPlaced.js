import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OrderPlaced = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();


    const routeChange = (path) => {
        navigate(path)
    }

    return (
        <div className="order-placed-container flex-col jc-sb ai-c">

            <h2 className="order-placed-title m-10">¡Orden dada de Alta!</h2>

            <p className="order-placed-sub-title m-10">El ID de su órden es:  <b>{id}</b> </p>
            
            <button onClick= {()=>{routeChange('/userdashboard')}} className="m-20 order-placed-button">Ver sus órdenes</button>

        </div>
    )

};

export default OrderPlaced;
