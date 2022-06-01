import { Fragment } from "react"
import ReactDOM from "react-dom"
import CartItem from "../Cart/CartItem"
import classes from './Modal.module.css'


const ModalBackdrop = () => {
    return (<div className={classes.modal__backdrop}></div>)
}

const ModalOverlay = props => {
    return (<div className={classes.modal__overlay}>{props.children}</div>)
}
const DUMMY_MEALS = [
    {
        'Id': 1,
        'Title': 'Butter Naan',
        'Type': 'Bread',
        'Is_Veg': true,
        'Quantity': '3',
        'Price': 30
    }, {
        'Id': 2,
        'Title': 'Masala Kulcha',
        'Type': 'Bread',
        'Is_Veg': true,
        'Quantity': '3',
        'Price': 45
    }, {
        'Id': 3,
        'Title': 'Panner Tikka Masala',
        'Type': 'Gravvy',
        'Is_Veg': true,
        'Quantity': '1',
        'Price': 190
    }, {
        'Id': 4,
        'Title': 'Chicken Ressala',
        'Type': 'Gravvy',
        'Is_Veg': false,
        'Quantity': '1',
        'Price': 200
    }, {
        'Id': 5,
        'Title': 'Normal Fried Rice',
        'Type': 'Rice',
        'Is_Veg': true,
        'Quantity': '1',
        'Price': 120
    }, {
        'Id': 6,
        'Title': 'Chicken Manchurian',
        'Type': 'Gravvy',
        'Is_Veg': false,
        'Quantity': '1',
        'Price': 250
    }
]
const Modal = () => {
    const itemTotal = 985
    const taxAmount = (itemTotal*0.05).toFixed(2)
    const deliveryCharge = 50
    const totalBill = itemTotal + parseFloat(taxAmount) +deliveryCharge
    const modalContent = (
        <div className={classes.modal__content}>
            <h3>Your Meal Box</h3>
            <hr />
            <ul className={classes.cart_detail}>
                {DUMMY_MEALS.map((item) => <CartItem key={item.Id} data={item} />)}
            </ul>
            <div>
                <div className={classes.cart_amount}>
                    <ul>
                        <li>
                            <h3>Item Total</h3>
                            <h5>{itemTotal}</h5>
                        </li>
                        <li>
                            <h3>Tax</h3>
                            <h5>{taxAmount}</h5>
                        </li>
                        <li>
                            <h3>Delivery charge</h3>
                            <h5>{deliveryCharge}</h5>
                        </li>
                    </ul>

                </div>
            </div>
            <div>
                <button>Pay Rs. {totalBill}</button>
                <button>Shop More</button>
            </div>
        </div>
    )
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalBackdrop />, document.getElementById('ModalBackdrop'))}
            {ReactDOM.createPortal(
                <ModalOverlay>{modalContent}</ModalOverlay>
                , document.getElementById('ModalOverlay'))}
        </Fragment>
    )
}

export default Modal