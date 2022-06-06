import React from 'react'
const CartContext = React.createContext({
    items : [],
    totalAmount : 0,
    addItem: item => {},
    increaseItem: itemId => {},
    reduceItem: itemId => {},
    removeITem: itemId => {}
})

export default CartContext
