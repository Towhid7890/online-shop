import React from 'react';

const Orderitem = (props) => {
    const{name,quantity}=props.product;
    const reviewStyle ={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom: '5px',
        marginLeft:'200px'
    }
    return (
        <div style={reviewStyle} className="review-item">
            <h2 className="product-name">{name}</h2>
            <p>Quantity : {quantity}</p>
            <button className='main-btn'>Remove Item</button>
        </div>
    );
};

export default Orderitem;