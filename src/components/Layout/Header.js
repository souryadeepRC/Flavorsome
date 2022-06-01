import { Fragment, useState } from 'react'
import appbanner from '../../assets/App_Banner.jpg'  
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const addItemHandler = () => {
        setCartItemCount((itemCount) => {
            return itemCount+1
        })
    }
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['header__content']}>
                    <div>
                        <h1>Flavoursome</h1>
                        <h6>An oasis of deliciousness</h6>
                    </div>
                    <button onClick={addItemHandler}>Add Item</button>
                    <HeaderCartButton itemCount={cartItemCount} onBtnClick={() => console.log('Btn Clicked')} />
                </div>
            </header>
            <div className={classes['main_image']}>
                <img src={appbanner} alt="A Table full of delicious meal" />
            </div>
        </Fragment>
    )
}

export default Header