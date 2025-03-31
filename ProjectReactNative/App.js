import 'react-native-gesture-handler'; 
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { PanGestureHandler, LongPressGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import axiosInstance from './src/api'; // Import Axios instance

// Home Screen Component
function HomeScreen({ navigation }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Animation and gesture variables
  const translateX = useSharedValue(0); 
  const opacity = useSharedValue(0);

  // API call function
  const fetchData = async () => {
    setError(null); // Reset error state
    try {
      const response = await axiosInstance.get('/posts/1'); // Example API endpoint
      setData(response.data); 
    } catch (err) {
      setError('❌ Failed to fetch data. Please try again.');
      console.error('API Error:', err);
    }
  };

  // Fetch data on component mount & trigger fade-in animation
  useEffect(() => {
    fetchData();
    opacity.value = withTiming(1, { duration: 2000, easing: Easing.ease });
  }, []);

  const onGestureEvent = (event) => {
    translateX.value = event.translationX;
  };

  const onLongPress = () => {
    console.log("Long Press Detected!");
  };

  // Animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value) }],
  }));

  const fadeInStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        {/* Swipe Gesture */}
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text>Swipe Me</Text>
          </Animated.View>
        </PanGestureHandler>

        {/* Long Press Button */}
        <LongPressGestureHandler onHandlerStateChange={onLongPress}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Long Press Me</Text>
          </TouchableOpacity>
        </LongPressGestureHandler>

        {/* Fade-in Text */}
        <Animated.Text style={[styles.fadeInText, fadeInStyle]}>
          I Fade In!
        </Animated.Text>

        {/* API Data Display */}
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

// Stack Navigator Setup
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
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  dataText: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  fadeInText: {
    marginTop: 20,
    fontSize: 24,
    color: 'green',
  },
});
