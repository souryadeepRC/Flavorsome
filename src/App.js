
import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
const ITEM_NOT_IN_CART_INDEX = -1
function App() {
  const [cartVisibility, setCartVisibility] = useState(false)
  const [cartList, setCartList] = useState([])

  const cartLength = cartList.length
  
  useEffect(() => {
    if (cartLength === 0) {
      setCartVisibility(false)
    }
  },[cartLength,cartVisibility])
 
  const getItemPosition = (list, itemId) => {
    for (let index = 0; index < list.length; index++) {
      if (list[index].Item_Id === itemId) {
        return index
      }
    }
    return ITEM_NOT_IN_CART_INDEX
  }
  const addItemToCartHandler = (itemDetail) => {

    setCartList(currentCartList => {
      const itemPositionInCart = getItemPosition(currentCartList, itemDetail.Item_Id)

      if (itemPositionInCart === ITEM_NOT_IN_CART_INDEX) {
        return [...currentCartList, {
          'Id': currentCartList.length + 1,
          ...itemDetail
        }]
      } else if (itemDetail.Quantity === 0) {
        currentCartList.splice(itemPositionInCart, 1)
        return [...currentCartList]
      } else {
        currentCartList[itemPositionInCart].Quantity = itemDetail.Quantity;
        currentCartList[itemPositionInCart].Price = itemDetail.Price;
        return [...currentCartList]
      }
    })
  }
  
  const reduceItemHandler = (itemId) => {

    setCartList(currentCartList => {
      const itemPositionInCart = getItemPosition(currentCartList, itemId)
      const item = currentCartList[itemPositionInCart]
      
      if (item.Quantity === 1) {
        currentCartList.splice(itemPositionInCart, 1)
      } else {
        item.Quantity = item.Quantity - 1;
        item.Price = item.Quantity * item.Item_Price;
      }
      return [...currentCartList]
    })

  }
  const increaseItemHandler = (itemId) => {
    setCartList(currentCartList => {
      const itemPositionInCart = getItemPosition(currentCartList, itemId)
      const item = currentCartList[itemPositionInCart]
      item.Quantity = item.Quantity + 1;
      item.Price = item.Quantity * item.Item_Price;
      return [...currentCartList]
    })
  }

  const removeItemHandler = itemId => {
    setCartList(currentCartList => {
      const itemPositionInCart = getItemPosition(currentCartList, itemId)
      currentCartList.splice(itemPositionInCart, 1)
      return [...currentCartList]
    })
  }
  
  const modifyItemHandler = (itemId, type) => {
    switch (type) {
      case 'Reduce':
        reduceItemHandler(itemId)
        break;
      case 'Increase':
        increaseItemHandler(itemId)
        break;
      case 'Remove':
        removeItemHandler(itemId)
        break;
      default:
        break;
    }
  }
  const showCartHandler =() => {
    if(cartList.length!==0){
      setCartVisibility(true)
    }
  }
  return (
    <Fragment>
      {cartList.length!==0 && cartVisibility
        ? <Cart itemList={cartList} onModifyItem={modifyItemHandler} onHideCart={() => setCartVisibility(false)} />
        : ''}
      <Header cartItemCount={cartList.length} onCartClick={showCartHandler} />
      <AvailableMeals itemList={cartList} onAddItemToCart={addItemToCartHandler} />
    </Fragment>
  );
}

export default App;
