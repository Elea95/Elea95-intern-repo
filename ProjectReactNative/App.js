import 'react-native-gesture-handler'; 
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // For navigation container
import { createStackNavigator } from '@react-navigation/stack';  // For stack navigator
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated'; // Updated import from react-native-reanimated
import { PanGestureHandler, LongPressGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'; // Import gesture handlers
import axiosInstance from './src/api'; // Import the Axios instance

// Home Screen Component
function HomeScreen({ navigation }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  // For pan gesture and fade-in animation
  const translateX = useSharedValue(0); // For pan gesture
  const opacity = useSharedValue(0);   // For fade-in effect

  const fetchData = async () => {
    try {
      // Make a GET request to fetch data
      const response = await axiosInstance.get('/data'); // Replace with your actual endpoint
      setData(response.data); // Set the data to state
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      console.error('API Error:', err); // Log the error for debugging
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts

    // Trigger fade-in animation after the component mounts
    opacity.value = withTiming(1, { duration: 2000, easing: Easing.ease });
  }, []);

  const onGestureEvent = (event) => {
    translateX.value = event.translationX; // Update the pan gesture
  };

  const onLongPress = () => {
    console.log("Long Press Detected!");
  };

  // Use animated styles to apply shared values
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(translateX.value) }], // Apply translation animation
    };
  });

  const fadeInStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value, // Use opacity shared value
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Pan Gesture Handler */}
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View
            style={[styles.box, animatedStyle]} // Apply animated style for pan gesture
          >
            <Text>Swipe Me</Text>
          </Animated.View>
        </PanGestureHandler>

        {/* Long Press Gesture Handler */}
        <LongPressGestureHandler onHandlerStateChange={onLongPress}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Long Press Me</Text>
          </TouchableOpacity>
        </LongPressGestureHandler>

        {/* Fade-in Text */}
        <Animated.Text style={[styles.fadeInText, fadeInStyle]}>
          I Fade In!
        </Animated.Text>

        {/* Display API Data or Error */}
        {error && <Text style={styles.errorText}>{error}</Text>}
        {data ? (
          <Text style={styles.dataText}>{JSON.stringify(data, null, 2)}</Text>
        ) : (
          <Text>Loading data...</Text>
        )}

        {/* Retry Button */}
        <Button title="Retry" onPress={fetchData} />

        {/* Navigation Button */}
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </GestureHandlerRootView>
  );
}

// Details Screen Component
function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

// Set up stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  dataText: {
    fontSize: 16,
    marginTop: 10,
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 50,
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  fadeInText: {
    marginTop: 50,
    fontSize: 24,
    color: 'green',
  },
});
