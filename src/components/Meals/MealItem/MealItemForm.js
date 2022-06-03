
import { useEffect, useState } from 'react' 
import classes from './MealItemForm.module.css'
const MealItemForm = props => {
    const [itemCount, setItemCount] = useState(props.quantity)
 
    useEffect(() => {
        setItemCount(props.quantity)
    },[props.quantity])
    
     
    const removeItemHandler = () => {
        setItemCount(itemCount => itemCount - 1)
        props.onAddItemToCart(itemCount -1)
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
                        <button className={classes.item__quantity__remove}  onClick={removeItemHandler}>-</button>
                        <p>{itemCount}</p>
                        <button className={classes.item__quantity__add} onClick={addItemHandler} >+</button>
                    </div>  
            } 
        </div>
    )
}

export default MealItemForm