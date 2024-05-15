import React, { createContext } from 'react';

// defining shape
const productContext = createContext({
    cart: [],
    setCart: () => {}
})


export default productContext; 