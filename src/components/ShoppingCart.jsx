import React, { useState, useContext }from 'react';
import productContext from '../context/productContext';

function ShoppingCart() {
    const { cart } = useContext(productContext);
  return (
    <div>
        <h2>Your Cart: </h2>
        {cart.map((item) => (
            <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
            </div>
        ))}
      
    </div>
  )
}

export default ShoppingCart
