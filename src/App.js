
import { useCallback, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import CartProvider from './store/CartProvider';
function App() {
  const [cartVisibility, setCartVisibility] = useState(false) 
  
  const showCartHandler = useCallback(() => {
    setCartVisibility(true)
  },[])
  const hideCartHandler = () => {
    setCartVisibility(false)
  }
  return (
    <CartProvider>
      
      {cartVisibility && <Cart onHideCart={hideCartHandler} /> }
      
      <Header onCartClick={showCartHandler} />
      
      { <AvailableMeals />}

    </CartProvider>
  );
}

export default App;
