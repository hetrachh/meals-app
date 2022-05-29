import { Text, View, StyleSheet } from "react-native";
export default function List({ children }) {
  return children.map((ingredient) => (
    <View style={styles.listItem}>
      <Text key={ingredient} style={styles.itemText}>
        {ingredient}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
