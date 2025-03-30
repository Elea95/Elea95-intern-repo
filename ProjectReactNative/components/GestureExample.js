import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView, Swipeable, LongPressGestureHandler } from 'react-native-gesture-handler';

const GestureExample = () => {
  const onSwipe = (event) => {
    console.log('Swiped:', event.nativeEvent.translationX);
  };

  const onLongPress = () => {
    console.log('Long Pressed!');
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Swipe Gesture */}
      <Swipeable onSwipe={onSwipe}>
        <View style={styles.box}>
          <Text>Swipe Me!</Text>
        </View>
      </Swipeable>

      {/* Long Press Gesture */}
      <LongPressGestureHandler onHandlerStateChange={onLongPress}>
        <View style={styles.box}>
          <Text>Long Press Me!</Text>
        </View>
      </LongPressGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default GestureExample;
