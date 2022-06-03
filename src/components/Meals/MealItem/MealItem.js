 
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const MealItem = props => {
    const addItemToCartHandler = (itemCount) => { 
        const quantity = parseInt(itemCount)
        props.onAddItemToCart({
            'Item_Id' : props.meal.Id,
            'Title' : props.meal.Title,
            'Type': props.meal.Type,
            'Quantity' : quantity,
            'Item_Price' : props.meal.Price,
            'Price' : quantity * props.meal.Price
        });
    }
    return (
        <li className={classes.meal__item}>
            <div className={classes.meal__item_quantity}>
                <div className={classes.meal__name}>
                    <h3 className={classes.meal__title}>{props.meal.Title}</h3>
                    <p className={`${classes.meal__division} 
                        ${props.meal.Is_Veg ? classes.veg_item : classes.nonveg_item}`}>&nbsp;</p>
                </div>
                <p className={classes.meal__type}>{props.meal.Type}</p>
                <p className={classes.meal__price}><b>Rs. </b>{props.meal.Price.toFixed(2)}</p>
            </div>  
            <MealItemForm quantity={props.quantity} onAddItemToCart={addItemToCartHandler}/> 
        </li>
    )
}
export default MealItem