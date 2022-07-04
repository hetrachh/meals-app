import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverview({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const mealData = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id == categoryId).title,
    });
  }, [categoryId, navigation]);

  return <MealsList mealData={mealData} />;
}
