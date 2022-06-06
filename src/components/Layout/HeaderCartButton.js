 
import { useContext, useEffect, useState } from 'react'; 
import CartContext from '../../store/Cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => { 
    const [isBtnAnimated,setIsBtnAnimated] = useState(false)
    const cartCtx = useContext(CartContext)
    const { items } = cartCtx
    useEffect(() => { 
        items.length > 0 && setIsBtnAnimated(true)   
        const btnAnimation = setTimeout(() => setIsBtnAnimated(false),500)
        return () => {
            clearTimeout(btnAnimation)
        }
    },[items])
    const btnClasses = `${classes.btn} ${isBtnAnimated ? classes.btn__animation : ''}`
    return( 
            <button className={btnClasses} onClick={props.onBtnClick}> 
                <p><CartIcon /></p>
                <p>{cartCtx.items.length}</p>
            </button> 
    )
}

export default HeaderCartButton