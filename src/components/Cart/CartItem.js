
import DeleteIcon from '../Icon/DeleteIcon'
import classes from './CartItem.module.css'
const CartItem = props => {
    return (
        <li className={classes.cart__item}>
            <div>
                <p className={classes.item__name}>{props.data.Title}</p>
            </div>
            
            <div className={classes.item__quantity}>
                <button className={classes.item__quantity__remove}>-</button>
                <p>{props.data.Quantity}</p>
                <button className={classes.item__quantity__add}>+</button>
            </div>
            <div className={classes.item_price__box}>
                <p className={classes.item_price}>Rs. {(props.data.Price * parseInt(props.data.Quantity)) }</p>
                <DeleteIcon />
            </div>
        </li>
    )
}

export default CartItem