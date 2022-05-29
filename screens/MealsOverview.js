import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverview({ route, navigation }) {
  const categoryId = route?.params?.categoryId || "c1";

  const mealData = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id == categoryId).title,
    });
  }, [categoryId, navigation]);

  function mealItem(itemData) {
    const { item } = itemData;
    const mealItem = {
      title: item.title,
      image: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      id: item.id,
    };
    return <MealItem mealItem={mealItem} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={mealData}
        keyExtractor={(item) => item.id}
        renderItem={mealItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
