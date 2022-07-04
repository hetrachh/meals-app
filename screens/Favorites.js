// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavoriteContext } from "../store/context/favorites-context";

export default function Favorites() {
  // const favMealsCtx = useContext(FavoriteContext);

  const favouritesMealsids = useSelector((state) => state.favouritesmeals.ids);
  console.log("favouritesMealsids", favouritesMealsids);
  const favMeals = MEALS.filter((meals) =>
    favouritesMealsids.includes(meals.id)
  );
  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }
  return <MealsList mealData={favMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
