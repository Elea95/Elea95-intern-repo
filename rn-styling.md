# React Native Stylesheets vs CSS-in-JS #24

1. Why does React Native use camelCase instead of traditional CSS properties?

React Native is built with JavaScript, where camelCase is the standard naming convention for object properties. This consistency allows React Native styles to blend in with the rest of the JavaScript code, making it more intuitive for developers.

2. What are the benefits of using StyleSheet.create() over inline styles?

Performance: By using StyleSheet.create(), React Native optimizes styles during the initial rendering, improving performance by reducing unnecessary recalculations on each render.
Readability: It separates styling from logic, keeping your components cleaner and more readable.
Consistency: Styles defined in StyleSheet.create() are easy to reference and maintain throughout your components.

3. How would you handle different screen sizes in React Native?

By utilizing the Dimensions API to get the device's width and height, applying responsive design techniques (like percentage widths/heights), and using libraries like react-native-responsive-screen to simplify dynamic sizing. Additionally, incorporating media queries or conditional styles based on the screen size can ensure optimal layouts across devices.

# Research the differences between React Native Stylesheets and standard CSS

Syntax and Properties:

React Native uses a JavaScript object for styles, where property names are written in camelCase. For example, backgroundColor instead of background-color.

Not all CSS properties are supported in React Native, as it does not have a DOM. Styles like float, flex, etc., are handled differently or not supported at all.

Styling Source:

In web CSS, you can use external stylesheets, while in React Native, styles are typically defined in JavaScript objects, either using StyleSheet.create() or inline styles.
Box Model Handling:

CSS uses box models that may differ based on display types (block, inline, etc.), whereas React Native layouts are primarily based on Flexbox, providing a consistent layout model across devices.
Experiment with both StyleSheet.create() and inline styles
StyleSheet.create():

This function creates a style object, allowing for better performance as it optimizes style calculations. It enables you to define styles outside of render methods and use them as needed.

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
```

Inline Styles:

Applying styles directly to elements within the component's render method. While this is sometimes convenient, it can lead to performance issues due to object creation on every render.

```js
<View style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
  <Text>Hello, World!</Text>
</View>
```

Explore how styling frameworks like @rneui/themed or react-native-paper work
@rneui/themed:

This library provides theming, allowing you to define a set of colors, fonts, and other styles globally. It helps maintain consistency across your application while facilitating easy adjustments to design elements.

react-native-paper:

A UI library that implements Material Design. It provides ready-to-use components that come with their own styling, which encourages a consistent look and feel according to Material Design principles.
How to Use:

Both libraries can be easily integrated and used consistently across your project by following their documentation. They allow you to import components with predefined styles instead of manually styling each element.

Test responsiveness using built-in React Native utilities

Dimensions API:

Use the Dimensions API to get the screen width and height and adjust styles based on these values.

```js
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
```

Percentage Values:

Use percentage values for width/height to make components responsive.

```js
const styles = StyleSheet.create({
container: {
width: '80%', // 80% of the screen width
height: height \* 0.5, // 50% of the screen height
}
});
```
