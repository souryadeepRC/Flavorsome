import { useEffect } from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
     useEffect(()=> {
        console.log('HeaderCartButton Loaded');
     })
    return( 
            <button 
                className={classes.btn} 
                onClick={props.onBtnClick}> 
                <p><CartIcon /></p>
                <p>{props.itemCount}</p>
            </button> 
    )
}

export default HeaderCartButton