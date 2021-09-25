import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    
    const{img, name, seller, price, stock,key}= props.product;
    return (
        <div className="product">
            <div>
               <img src={img} alt="" /> 
            </div>
            <div>
            <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
            <p><small>By : {seller}</small></p>
            <p>Price : ${price}</p>
            <p><small>only {stock} left in -order now</small></p>
            {props.showAddToCart && <button className="main-btn"
            onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>}
            </div>
            
        </div>
    );
};

export default Product;