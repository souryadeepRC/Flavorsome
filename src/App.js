
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import CartProvider from './store/CartProvider';
function App() {
  const [cartVisibility, setCartVisibility] = useState(false) 
   
  return (
    <CartProvider>
      
      {cartVisibility && <Cart onHideCart={() => setCartVisibility(false)} /> }
      
      <Header onCartClick={() => setCartVisibility(true)} />
      
      <AvailableMeals />

    </CartProvider>
  );
}

export default App;
