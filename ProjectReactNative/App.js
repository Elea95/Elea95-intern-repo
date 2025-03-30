import 'react-native-gesture-handler';  // Import first!
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // For navigation container
import { createStackNavigator } from '@react-navigation/stack';  // For stack navigator
import { Text, View, Button, TouchableOpacity } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated'; // Updated import from react-native-reanimated
import { PanGestureHandler, LongPressGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'; // Import gesture handlers

// Home Screen Component
function HomeScreen({ navigation }) {
  // Use shared value from react-native-reanimated for swipe and opacity animation
  const translateX = useSharedValue(0); // For pan gesture
  const opacity = useSharedValue(0);   // For fade-in effect

  useEffect(() => {
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Pan Gesture Handler */}
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View
            style={[
              {
                width: 200,
                height: 200,
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center',
              },
              animatedStyle, // Apply the animated style for translateX
            ]}
          >
            <Text>Swipe Me</Text>
          </Animated.View>
        </PanGestureHandler>

        {/* Long Press Gesture Handler */}
        <LongPressGestureHandler onHandlerStateChange={onLongPress}>
          <TouchableOpacity
            style={{
              marginTop: 50,
              padding: 10,
              backgroundColor: 'tomato',
              borderRadius: 5,
            }}
          >
            <Text style={{ color: 'white' }}>Long Press Me</Text>
          </TouchableOpacity>
        </LongPressGestureHandler>

        {/* Fade-in Text */}
        <Animated.Text
          style={[
            {
              marginTop: 50,
              fontSize: 24,
              color: 'green',
            },
            fadeInStyle, // Apply the animated style for fade-in effect
          ]}
        >
          I Fade In!
        </Animated.Text>

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
