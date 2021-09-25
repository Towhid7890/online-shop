import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Orderitem from '../Orderitem/Orderitem';
import happyImg from '../../images/giphy.gif';
const Order = () => {
   const [cart,setCart] = useState([]);
   const [orderPlaced, setOrderPlaced]= useState(false)

   const handlePlaceOrder =()=>{
       setCart([]);
       setOrderPlaced(true);
       processOrder();
       console.log('place order')
    }
   
   const removeProduct =(productKey) =>{
    // console.log('remove clicked',productKey);
    const newCart = cart.filter(pd =>pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
   }

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
   }, []);
   let thankyou;
   if(orderPlaced){
       thankyou = <img src={happyImg} alt="" />
   }
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                cart.map(pd=> <Orderitem removeProduct={removeProduct} key={pd.key} product={pd}></Orderitem>)
            }
            {
                thankyou
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-btn">Place Order</button>
                </Cart>
            </div>
           
        </div>
    );
};

export default Order;