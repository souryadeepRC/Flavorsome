
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../../store/Cart-context'
import classes from './MealItemForm.module.css'
const MealItemForm = props => {
    const cartCtx = useContext(CartContext)
    const [itemCount, setItemCount] = useState(0) 
    const itemPositionInCart = cartCtx.items.findIndex(item => item.Item_Id === props.meal.Item_Id)
    const quantity = itemPositionInCart !== -1 ? cartCtx.items[itemPositionInCart].Quantity : 0
     
    useEffect(() => {
        setItemCount(quantity)
    },[quantity])
      
    const reduceItemHandler = () => {
        cartCtx.modifyItem('REDUCE', props.meal.Item_Id)
    }
    const increaseItemHandler = () => {
        cartCtx.modifyItem('INCREASE', props.meal.Item_Id)
    }
    const addItemHandler = () => {
        cartCtx.addItem(props.meal)
    }

    return (
        <div className={classes.item_quantity__box}>
            {
                itemCount === 0
                    ? <button className={classes.item_quantity__button}
                        onClick={addItemHandler} >+Add</button>
                    : <div className={classes.item__quantity}>
                        <button className={classes.item__quantity__remove} onClick={reduceItemHandler}>-</button>
                        <p>{itemCount}</p>
                        <button className={classes.item__quantity__add} onClick={increaseItemHandler} >+</button>
                    </div>
            }
        </div>
    )
}

export default MealItemForm