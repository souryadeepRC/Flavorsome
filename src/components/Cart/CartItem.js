
import { useContext } from 'react'
import CartContext from '../../store/Cart-context'
import DeleteIcon from '../Icon/DeleteIcon'
import classes from './CartItem.module.css'
const CartItem = props => { 
    const cartCtx = useContext(CartContext)
    const increaseItemHandler = () => {
        cartCtx.modifyItem('INCREASE',props.data.Item_Id)
    } 
    const reduceItemHandler = () => {
        cartCtx.modifyItem('REDUCE',props.data.Item_Id)
    }
    const removeItemHandler = () => {
        cartCtx.modifyItem('REMOVE',props.data.Item_Id)
    }
    return (
        <li className={classes.cart__item}>
            <div><p className={classes.item__name}>{props.data.Title}</p></div>
            
            <div className={classes.item__quantity}>
                <button className={classes.item__quantity__remove} onClick={reduceItemHandler}>-</button>
                <p>{props.data.Quantity}</p>
                <button className={classes.item__quantity__add} onClick={increaseItemHandler}>+</button>
            </div>

            <div className={classes.item_price__box}>
                <p className={classes.item_price}>Rs. {(props.data.Price).toFixed(2) }</p>
                <button className={classes.item_remove__btn} onClick={removeItemHandler}><DeleteIcon /></button>
            </div>
        </li>
    )
}

export default CartItem