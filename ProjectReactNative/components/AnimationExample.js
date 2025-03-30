import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

const AnimationExample = () => {
  const [animValue] = useState(new Animated.Value(0)); // Initial value for the animation

  const moveBox = () => {
    Animated.timing(animValue, {
      toValue: 200, // Move the box 200 units to the right
      duration: 500, // Duration of the animation
      easing: Easing.ease, // Easing function
      useNativeDriver: true, // Use native driver for performance
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={moveBox}>
        <View style={styles.button}>
          <Text style={styles.text}>Press to Move</Text>
        </View>
      </TouchableOpacity>

      <Animated.View
        style={[styles.box, { transform: [{ translateX: animValue }] }]} // Apply the animation to box
      >
        <Text>Move Me!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimationExample;
