
import { useState } from 'react'
import InputElement from '../../UI/InputElement'
import classes from './MealItemForm.module.css'
const MealItemForm = () => {
    const [itemCount,setItemCount] = useState(1)
    const updateItemHandler = (value) => {
        setItemCount(value)
    }
     
    return (
        <form className={classes.item_quantity__box}>

            <InputElement 
                input={{
                    'id':"Quantity",
                    'type': 'number',
                    'value': itemCount,
                    'min': '1',
                    'step': '1'
                }}
                onItemUpdate={updateItemHandler}
            />
            <button type="submit" className={classes.item_quantity__button}>+Add</button>
        </form>
    )
}

export default MealItemForm