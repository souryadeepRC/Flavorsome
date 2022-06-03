import { Fragment } from "react"
import ReactDOM from "react-dom"
import classes from './Modal.module.css'


const ModalBackdrop = props => {
    return (<div className={classes.modal__backdrop} onClick={props.onBackdropClick}></div>)
}

const ModalOverlay = props => {
    return (<div className={classes.modal__overlay}>{props.children}</div>)
}

const Modal = (props) => {
    
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalBackdrop onBackdropClick={props.onBackdropClick}/>, document.getElementById('ModalBackdrop'))}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.content}</ModalOverlay>
                , document.getElementById('ModalOverlay'))}
        </Fragment>
    )
}

export default Modal