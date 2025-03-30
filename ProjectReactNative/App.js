import 'react-native-gesture-handler';  // Import first!
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import { Text, View, TouchableOpacity } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated'; // Updated import from react-native-reanimated
import { PanGestureHandler, LongPressGestureHandler } from 'react-native-gesture-handler'; // Import gesture handlers

export default function App() {
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
      transform: [{ translateX: withSpring(translateX.value) }],
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
      </View>
    </GestureHandlerRootView>
  );
}
