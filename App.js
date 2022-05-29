import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";

const DrawerNavigation = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          drawerStyle: { backgroundColor: "#ccc" },
        }}
      >
        <DrawerNavigation.Screen
          name="Category"
          component={Categories}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <DrawerNavigation.Screen
          name="MealsOverView"
          component={MealsOverview}
        />
        <DrawerNavigation.Screen name="MealDetail" component={MealDetails} />
      </DrawerNavigation.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
