import Modal from "../UI/Modal"
import CartItem from "../Cart/CartItem"
import classes from './Cart.module.css'
import { Fragment, useContext } from "react";
import CartContext from "../../store/Cart-context";
const TAX_SLAB = 5
const STANDARD_DELIVERY_CHARGE = 50
const FREE_DELIVERY_CHARGE = 500
const Cart = props => {
    const cartCtx = useContext(CartContext)
    const itemTotal = cartCtx.totalAmount
    const taxAmount = (itemTotal * TAX_SLAB / 100).toFixed(2)
    const deliveryCharge = itemTotal >= FREE_DELIVERY_CHARGE ? 0 : STANDARD_DELIVERY_CHARGE
    const totalBill = itemTotal + parseFloat(taxAmount) + deliveryCharge


    const cartPriceSection = (
        <ul className={classes.cart_amount}>
            <li>
                <p>Item Total</p>
                <p>{itemTotal}</p>
            </li>
            <li>
                <p>Tax ({TAX_SLAB}%)</p>
                <p>{taxAmount}</p>
            </li>
            <li>
                {deliveryCharge !== 0
                    ? <Fragment><p>Delivery charge</p> <p>{deliveryCharge}</p></Fragment>
                    : <p className={classes.free__delivery}>Free Delivery</p>
                }
            </li>
        </ul>
    )

    const validCartContent = (
        <div className={classes.cart__content}>
            <h3>Your Meal Box</h3>
            <hr />
            <ul className={classes.cart_detail}>
                {cartCtx.items.map((item) => <CartItem key={item.Id} data={item} />)}
            </ul>
            {cartPriceSection}
            <div className={classes.cart__btn}>
                <button>Pay Rs. {totalBill}</button>
                <button onClick={props.onHideCart}>Shop More</button>
            </div>
        </div>
    )
    const zeroCartContent =
        <Fragment>
            <h4 className={classes.cart__empty}>Please add some item in you bag</h4>
            <div className={classes.cart__btn}>
                <button onClick={props.onHideCart}>Shop More</button>
            </div>
        </Fragment>
    const cartContent = cartCtx.items.length === 0 ? zeroCartContent : validCartContent

    return (
        <Modal content={cartContent} onHideCart={props.onHideCart} />
    )
}

export default Cart