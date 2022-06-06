import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        'Id': 1,
        'Title': 'Butter Naan',
        'Type': 'Bread',
        'Is_Veg': true,
        'Price': 30
    }, {
        'Id': 2,
        'Title': 'Masala Kulcha',
        'Type': 'Bread',
        'Is_Veg': true,
        'Price': 45
    }, {
        'Id': 3,
        'Title': 'Panner Tikka Masala',
        'Type': 'Gravvy',
        'Is_Veg': true,
        'Price': 190
    }, {
        'Id': 4,
        'Title': 'Chicken Ressala',
        'Type': 'Gravvy',
        'Is_Veg': false,
        'Price': 200
    }, {
        'Id': 5,
        'Title': 'Normal Fried Rice',
        'Type': 'Rice',
        'Is_Veg': true,
        'Price': 120
    }, {
        'Id': 6,
        'Title': 'Chicken Manchurian',
        'Type': 'Gravvy',
        'Is_Veg': false,
        'Price': 250
    }
]

const AvailableMeals = props => {

    const mealList = DUMMY_MEALS.map((meal) => {
        return <MealItem key={meal.Id} meal={meal} />
    })
    return (
        <Card><ul className={classes.meal_list}>{mealList}</ul></Card>
    )
}
export default AvailableMeals