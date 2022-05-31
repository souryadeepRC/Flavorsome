
import classes from './MealItem.module.css'
const MealItem = props => {
    return (
        <li className={classes.meal__item}>
            <div>
                <div className={classes.meal__name}>
                    <h3 className={classes.meal__title}>{props.meal.Title}</h3>
                    <p className={`${classes.meal__division} 
                        ${props.meal.Is_Veg ? classes.veg_item : classes.nonveg_item}`}>&nbsp;</p>
                </div>
                <p className={classes.meal__type}>{props.meal.Type}</p>
                <p className={classes.meal__price}><b>Rs. </b>{props.meal.Price.toFixed(2)}</p>
            </div>
            <div>
                <input type='number' />
                <button>+Add</button>
            </div>
        </li>
    )
}
export default MealItem