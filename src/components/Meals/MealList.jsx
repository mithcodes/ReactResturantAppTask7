import { useState } from "react";
import classes from "./Meal.module.css";
import MealItem from "./MealItem";

const MealList = ({ mealItems }) => {
  return (
    <div className={classes.mealList}>
      {mealItems.map((item, index) => (
        <MealItem item={item} key={index}></MealItem>
      ))}
    </div>
  );
};

export default MealList;
