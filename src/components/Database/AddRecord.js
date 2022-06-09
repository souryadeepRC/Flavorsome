import { Fragment } from "react"
import InputDataForm from "./InputDataForm"

const AddRecord = () => {
    
    const addFoodInDB = async (meal) => {
        try {
            const response = await fetch('https://flavoursome-1fea7-default-rtdb.firebaseio.com/meals.json',{
                method:'POST',
                body:JSON.stringify(meal),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            console.log(response);
            const data = await response.json()
            console.log(data);
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
    } 
    
    return (
        <Fragment>
            <h1>Add Record</h1>
            <InputDataForm onFormSubmit={addFoodInDB}/>
        </Fragment>
    )
}
export default AddRecord