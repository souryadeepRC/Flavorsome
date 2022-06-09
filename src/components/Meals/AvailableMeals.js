import React from 'react'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        'Item_Id': 1,
        'Title': 'Butter Naan',
        'Type': 'Bread',
        'Is_Veg': true,
        'Item_Price': 30
    }, {
        'Item_Id': 2,
        'Title': 'Masala Kulcha',
        'Type': 'Bread',
        'Is_Veg': true,
        'Item_Price': 45
    }, {
        'Item_Id': 3,
        'Title': 'Panner Tikka Masala',
        'Type': 'Gravvy',
        'Is_Veg': true,
        'Item_Price': 190
    }, {
        'Item_Id': 4,
        'Title': 'Chicken Ressala',
        'Type': 'Gravvy',
        'Is_Veg': false,
        'Item_Price': 200
    }, {
        'Item_Id': 5,
        'Title': 'Normal Fried Rice',
        'Type': 'Rice',
        'Is_Veg': true,
        'Item_Price': 120
    }, {
        'Item_Id': 6,
        'Title': 'Chicken Manchurian',
        'Type': 'Gravvy',
        'Is_Veg': false,
        'Item_Price': 250
    }
]

const AvailableMeals = () => {

    const mealList = DUMMY_MEALS.map((meal) => {
        return <MealItem key={meal.Item_Id} meal={meal} />
    })
    return (
        <Card><ul className={classes.meal_list}>{mealList}</ul></Card>
    )
}
export default React.memo(AvailableMeals)