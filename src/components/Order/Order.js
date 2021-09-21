import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Orderitem from '../Orderitem/Orderitem';

const Order = () => {
   const [cart,setCart] = useState([]);

   useEffect(()=>{
       const saveCart = getDatabaseCart();
       const productKeys = Object.keys(saveCart);
       const cartProducts = productKeys.map(key=>{
           const product= fakeData.find(pd => pd.key===key);
           product.quantity=saveCart[key];
           return product;
       })
       setCart(cartProducts);

    //    console.log(cartProducts);
   });
    return (
        <div>
            <h2>Order is {cart.length}</h2>
            {
                cart.map(pd=> <Orderitem key={pd.key} product={pd}></Orderitem>)
            }
        </div>
    );
};

export default Order;