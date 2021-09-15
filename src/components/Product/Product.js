import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props);
    const{img, name, seller, price, stock}= props.product;
    return (
        <div className="product">
            <div>
               <img src={img} alt="" /> 
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <p><small>By : {seller}</small></p>
            <p>Price : ${price}</p>
            <p><small>only {stock} left in -order now</small></p>
            <button className="main-btn"
            onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;