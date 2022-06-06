
import {  useContext, useEffect, useState } from 'react'  
import CartContext from '../../../store/Cart-context'
import classes from './MealItemForm.module.css'
const MealItemForm = props => {
    const cartCtx = useContext(CartContext)  
    const {quantity } = props
    const [itemCount, setItemCount] = useState(quantity)
     
    useEffect(() => {
        setItemCount(quantity)
    },[quantity])

    const reduceItemHandler = () => {
        setItemCount(itemCount => itemCount - 1)
        cartCtx.modifyItem('REDUCE',props.id)
    }
    const increaseItemHandler = () => {
        setItemCount(itemCount => itemCount + 1)
        cartCtx.modifyItem('INCREASE',props.id)
    } 
    const addItemHandler = () => {
        setItemCount(itemCount => itemCount + 1) 
        props.onAddItemToCart(itemCount+1)
    } 
 
    return (
        <div className={classes.item_quantity__box}>
            {
                itemCount === 0 
                ? <button className={classes.item_quantity__button}
                        onClick={addItemHandler} >+Add</button>
                :   <div className={classes.item__quantity}>
                        <button className={classes.item__quantity__remove}  onClick={reduceItemHandler}>-</button>
                        <p>{itemCount}</p>
                        <button className={classes.item__quantity__add} onClick={increaseItemHandler} >+</button>
                    </div>  
            } 
        </div>
    )
}

export default MealItemForm