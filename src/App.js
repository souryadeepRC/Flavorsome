
import { useCallback, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import AddRecord from './components/Database/AddRecord';
import FetchRecord from './components/Database/FetchRecord';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import CartProvider from './store/CartProvider';
function App() {
  const [cartVisibility, setCartVisibility] = useState(false)

  const showCartHandler = useCallback(() => {
    setCartVisibility(true)
  }, [])
  const hideCartHandler = () => {
    setCartVisibility(false)
  }
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMoviesHandler = async () => {
    if (movieList.length === 0) {

      setIsLoading(true)
      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()

      console.log(data);
      const transformedList = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date
        }
      })
      setMovieList(transformedList)
      setIsLoading(false)
    }
  }

  return (
      <div>
        <AddRecord />
        <FetchRecord />
      </div>
    
  );
}
/* <CartProvider>
      
      {cartVisibility && <Cart onHideCart={hideCartHandler} /> }
      
      <Header onCartClick={showCartHandler} />
      
      { <AvailableMeals />}

    </CartProvider> */
export default App;
