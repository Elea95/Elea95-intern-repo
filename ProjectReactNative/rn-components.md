# Understanding React Native Components vs. React Components #25

Updated Code (Using React Native Components)
This example converts a typical React web component into a fully functional React Native component.

📌 Refactored React Native Component

```js
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

// Sample data for FlatList
const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

// List item component
const ListItem = ({ title }) => (
  <View style={[styles.listItem, { backgroundColor: "#87CEEB" }]}>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

// Main component
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Heading */}
      <Text style={[styles.heading, { color: "tomato" }]}>
        React Native Components
      </Text>

      {/* Image */}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />

      {/* FlatList for rendering a list of items */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem title={item.title} />}
      />
    </ScrollView>
  );
}

// Styles using StyleSheet.create()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  listItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    color: "white",
  },
});
```

🔹 Key Differences Between React Web and React Native (a - React Web, b - React Native):

1. UI Rendering: a - Uses HTML elements rendered in the DOM; b - Uses native UI components (View, Text) mapped to platform-specific elements;
2. Styling: a- Uses CSS & className (class="container"); b - Uses StyleSheet.create() & inline styles (style={{}});
3. Flexbox Support: a - Partial support (depends on browsers); b - Fully supported (Flexbox is the primary layout system);
4. Lists: a - <ul>, <li>, map() for lists; b - Uses FlatList & ScrollView for optimized performance;
5. Images: a - <img src="..." />; b - Uses `js <Image source={{ uri: '...' }} /> `;
6. Scroll Handling: a- Uses <div> with overflow: scroll; b - Uses ScrollView (optimized for mobile);

🔹 Why Doesn’t React Native Use className?
No CSS in React Native → Uses JavaScript-based styling with StyleSheet.create().

Optimized Performance → StyleSheet.create() reduces re-renders by caching styles.

Native Rendering → React Native uses native UI elements (View, Text), not HTML elements.

🔹 Why StyleSheet.create() Improves Performance
✅ Pre-compiles styles → Styles are processed once, reducing re-renders.
✅ Optimized memory usage → Style objects are immutable and shared across components.
✅ Consistent across platforms → Ensures styles work the same on iOS & Android.
