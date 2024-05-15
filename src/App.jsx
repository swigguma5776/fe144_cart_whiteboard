import { useState } from 'react';
import './App.css'
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import productContext from './context/productContext';

function App() {
  const [cart, setCart] = useState([]);

  return (
   <productContext.Provider value={{cart, setCart}}>
      <ProductList />
      <ShoppingCart />
   </productContext.Provider>
  )
}

export default App;
