import React, { useState, useContext } from 'react'
import productContext from '../context/productContext'

function ProductList() {
    const { cart, setCart } = useContext(productContext);
    const [products, setProducts] = useState([
        {
            id:1,
            name: 'apple', 
            price: 1.99
        },
        {
            id:2,
            name: 'mango', 
            price: 2.99
        }
    
    ])
    
    const handleCart = (product) => {
        const currentCart = [...cart] //look inside what already exists in cart
        const index = currentCart.findIndex((item) => item.id == product.id)
        
        if (index != -1){
            currentCart[index]['quantity'] += 1
            setCart(currentCart)
        } else {
            product['quantity'] = 1
            setCart([...currentCart, product]) //same as .push() we just can't .push() with state management
        }
    }
    
    console.log(cart)
    
    
  return (
    <div>
        {products.map((product) => (
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => handleCart(product) }>Add To Cart</button>
            </div>
        ))}
      
    </div>
  )
}

export default ProductList
