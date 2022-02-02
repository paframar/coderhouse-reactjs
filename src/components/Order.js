import React from 'react';
import PaymentResumeItem  from './PaymentResumeItem';

const Order = (props) => {  

    
    return (
    
        <div className="order">

            <h3 className="order-title"> Orden # {props.id} </h3>
            
            <div className="flex-row jc-sa ai-c">
                <button className="flex-row jc-sa ai-c order-button"><i className="material-icons">east</i>Ver orden</button>
            </div>


            <div className="flex-row jc-sa ai-c">
          
            </div>


        
        </div>

    );
};

export default Order;
