import { useLayoutEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import { MEALS } from "../data/dummy-data";
export default function MealDetails({ route, navigation }) {
  const id = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === id);
  function onPressHandler() {
    console.log("Hello");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton onPress={onPressHandler} icon="star" color="white" />
        );
      },
    });
  }, [navigation, onPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: mealData.imageUrl }} style={styles.image}></Image>
      <Text style={styles.title}>{mealData.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{mealData.duration}m</Text>
        <Text style={styles.detailItem}>
          {mealData.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {mealData.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List>{mealData.ingredients}</List>
          <SubTitle>Steps</SubTitle>
          <List>{mealData.steps}</List>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    bottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
  subTitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    marginHorizontal: 24,
    marginVertical: 4,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
