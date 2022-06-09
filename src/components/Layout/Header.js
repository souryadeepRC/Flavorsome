import React from 'react'
import { Fragment } from 'react'
import appbanner from '../../assets/App_Banner.jpg'  
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.header__content}>
                    <div>
                        <h1>Flavoursome</h1>
                        <h6>An oasis of deliciousness</h6>
                    </div>
                    <HeaderCartButton onBtnClick={props.onCartClick} />
                </div>
            </header>
            <div className={classes.main_image}>
                <img src={appbanner} alt="A Table full of delicious meal" />
            </div>
        </Fragment>
    )
}

export default React.memo(Header)