import React from 'react';

const PaymentResumeItem = (props) => {

    const subTotal = props.item.price * props.item.quantity;

    return (
        <div className ="payment-resume-item">
            <p>{props.item.name}</p>
            <p>x {props.item.quantity}</p>
            <p>$ {subTotal.toFixed(2)}</p>
        </div>
    )
}

export default PaymentResumeItem