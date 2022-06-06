import { useReducer } from "react"
import CartContext from "./Cart-context"

 
const defaultCartState = {
    items: [],
    totalAmount: 0
}
const addItemToCart = (exitingItems, existingTotalAmount, addedItem) => {
    return {
        items: exitingItems.concat({
            'Id': exitingItems.length + 1,
            ...addedItem
        }),
        totalAmount: existingTotalAmount + addedItem.Price
    }
}
const increaseItemInCart = (exitingItems, existingTotalAmount, itemPosition) => {
    
    const updatedItems = [...exitingItems]
    const modifiedItem = updatedItems[itemPosition]
 
    modifiedItem.Quantity++
    modifiedItem.Price = modifiedItem.Quantity * modifiedItem.Item_Price
    updatedItems[itemPosition] = modifiedItem
    return {
        items: updatedItems,
        totalAmount: existingTotalAmount + exitingItems[itemPosition].Item_Price
    }
}

const reduceItemFromCart = (exitingItems, existingTotalAmount, itemPosition) => {

    const updatedItems = [...exitingItems]
    const removalItem = updatedItems[itemPosition]
    const latestTotalAmount = existingTotalAmount - removalItem.Item_Price

    if (removalItem.Quantity === 1) {
        updatedItems.splice(itemPosition, 1)
    } else {
        removalItem.Quantity--;
        removalItem.Price = removalItem.Quantity * removalItem.Item_Price;
        updatedItems[itemPosition] = removalItem
    }
    return {
        items: updatedItems,
        totalAmount: latestTotalAmount
    }
}
const removeItemFromCart = (exitingItems, existingTotalAmount, itemPosition) => {

    const updatedItems = [...exitingItems] 
    const latestTotalAmount = existingTotalAmount - updatedItems[itemPosition].Price
    updatedItems.splice(itemPosition, 1)
    return {
        items: updatedItems,
        totalAmount: latestTotalAmount
    }
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        return addItemToCart(state.items, state.totalAmount, action.item)
    }else{
        const itemPositionInCart = state.items.findIndex(item => item.Item_Id === action.itemId)
        if (action.type === 'INCREASE') {
            return increaseItemInCart(state.items, state.totalAmount, itemPositionInCart)
        }
        if (action.type === 'REDUCE') {
            return reduceItemFromCart(state.items, state.totalAmount, itemPositionInCart)
        }
        if (action.type === 'REMOVE') {
            return removeItemFromCart(state.items, state.totalAmount, itemPositionInCart)
        }
    } 
    return defaultCartState
}
const CartProvider = props => {
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState)
   
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: item => dispatchAction({ type: 'ADD', item: item }),
        modifyItem: (actionType, itemId) => dispatchAction({ type: actionType, itemId: itemId }),
        removeItem: itemId => dispatchAction({ type: 'REMOVE', itemId: itemId }) 
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider