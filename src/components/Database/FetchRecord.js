import { useEffect, useState } from "react"

const FetchRecord = () => {
    const [availableMeals, setAvailableMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchFoodHandler = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://flavoursome-1fea7-default-rtdb.firebaseio.com/meals.json')
            console.log(response);
            const data = await response.json()
            console.log(data);
            const mealItems = []
            for(const key in data){
                mealItems.push({
                    id : key,
                    title : data[key].title,
                    type : data[key].Type,
                    is_Veg : data[key].Is_Veg,
                    price : data[key].Price,
                })
            }
            setAvailableMeals(mealItems)
            /* const transformedList = data.results.map(movieData => {
              return {
                id: movieData.episode_id,
                title: movieData.title,
                releaseDate: movieData.release_date
              }
            }) */
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)

    }
    useEffect(() => {
        fetchFoodHandler()
    }, [])
    let content = <p>No Food present</p>

    if (availableMeals.length > 0) {
        content = <ul>
            {availableMeals.map(meal => {
            return (<li key={meal.id}>
              <p>{meal.title}</p>
              <p>{meal.is_Veg? 'Veg' : 'Non-Veg'}</p>
              <p>{meal.type}</p>
              <p>{meal.price}</p>
            </li>)
          })}
        </ul>
    }

    if (isLoading) {
        content = <p>Loading...</p>
    }
    return (
        <div>
            <h1>Meal List</h1>
            <button onClick={fetchFoodHandler}>Get All Meal</button>
            {content}
        </div>
    )
}

export default FetchRecord

/*
<div>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      {!isLoading && movieList.length !== 0 && <ul>
        {
          movieList.map(movie => {
            return (<li key={movie.id}>
              <p>{movie.title}</p>
              <p>{movie.releaseDate}</p>
            </li>)
          })
        }
      </ul>}
      {!isLoading && movieList.length === 0 && <p>Load Movies</p>}
      {isLoading && <p>Loading</p>}
    </div>
*/