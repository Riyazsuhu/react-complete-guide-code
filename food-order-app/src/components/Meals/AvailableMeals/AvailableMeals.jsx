import { useState, useEffect } from "react";

import style from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import useHttpRequest from "../../../hook/useHttpRequest";

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState([]);
  const { sendRequest, isLoading, isError } = useHttpRequest();

  useEffect(() => {
    const dataTransform = (data) => {
      let meals = [];
      for (const key in data) {
        meals.push({ id: key, ...data[key] });
      }
      setMealsList(meals);
    };
    const credentials = {
      collection: "meal.json",
    };
    sendRequest(credentials, dataTransform);
  }, [sendRequest]);
  const Loading = (
    <section className={style.mealsLoading}>
      <p>Loading..</p>
    </section>
  );
  const availableMeals = isError ? (
    <p className={style['error-text']}>Something went wrong!!</p>
  ) : (
    mealsList.map((meal) => (
      <MealItem key={meal.id} meal={meal}>
        {meal.name}
      </MealItem>
    ))
  );

  return (
    <section className={style.meals}>
      <ul>
        {isLoading && Loading}
        {!isLoading && <Card>{availableMeals}</Card>}
      </ul>
    </section>
  );
};

export default AvailableMeals;
