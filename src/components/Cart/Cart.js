import React from 'react';

import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total+prd.price* prd.quantity ,0);
    
    let shipping =0;
    if(total> 200){
        shipping = 10;
    }
    else if(total >100){
        shipping = 20.99;
    }
    else if(total >0 ){
        shipping =10;
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Cart Order : {cart.length} </h5>
            <p>Shipping cost: {shipping}</p>
            <p> Total Price : {total + shipping} </p>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;