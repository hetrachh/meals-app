import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
export default function MealsList({ mealData }) {
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
