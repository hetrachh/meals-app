import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
            tabBarActiveTintColor: "#3c0a6b",
          }}
        >
          <Tab.Screen
            name="MealsCategories"
            component={Categories}
            options={{
              title: "All Categories",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="MealsOverView"
            component={MealsOverview}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="pizza" color={color} size={size} />
              ),
            }}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Tab.Screen
            name="MealDetail"
            component={MealDetails}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="briefcase-sharp" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
