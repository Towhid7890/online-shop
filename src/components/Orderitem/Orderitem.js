import React from 'react';

const Orderitem = (props) => {
    const{name,quantity,key,price}=props.product;
    const reviewStyle ={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom: '5px',
        marginLeft:'100px',
        width:'70%'
    }
    return (
        <div style={reviewStyle}>
            <h2 className="product-name">{name}</h2>
            <p>Quantity : {quantity}</p>
            <p>{price}</p>
            <button className='main-btn' onClick={()=>props.removeProduct(key)}>Remove Item</button>
        </div>
    );
};

export default Orderitem;