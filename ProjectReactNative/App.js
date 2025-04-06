import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { PanGestureHandler, LongPressGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import axiosInstance from './src/api';
import './src/i18n/i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Config from 'react-native-config';
import linking from './linking';

const Stack = createStackNavigator();

// 🏠 Home Screen
function HomeScreen({ navigation }) {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);

  const fetchData = async () => {
    setError(null);
    try {
      const response = await axiosInstance.get('/posts/1');
      setData(response.data);
    } catch (err) {
      setError('❌ Failed to fetch data. Please try again.');
      console.error('API Error:', err);
    }
  };
  const { Battery } = NativeModules;

  useEffect(() => {
    Battery.getBatteryLevel().then(level => {
      console.log('🔋 Battery level:', level);
    });
  }, []);
console.log(Config.API_URL); // Outputs env variable
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

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value) }],
  }));

  const fadeInStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(nextLang);
    AsyncStorage.setItem('user-language', nextLang);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        {/* Language Switcher */}
        <Button title={t('change_language')} onPress={toggleLanguage} />

        {/* Swipe Gesture */}
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text>{t('swipe_me')}</Text>
          </Animated.View>
        </PanGestureHandler>

        {/* Long Press */}
        <LongPressGestureHandler onHandlerStateChange={onLongPress}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{t('long_press_me')}</Text>
          </TouchableOpacity>
        </LongPressGestureHandler>

        {/* Fade In Text */}
        <Animated.Text style={[styles.fadeInText, fadeInStyle]}>
          {t('fade_in_text')}
        </Animated.Text>

        {/* API Result */}
        {error && <Text style={styles.errorText}>{error}</Text>}
        {data ? (
          <Text style={styles.dataText}>{JSON.stringify(data, null, 2)}</Text>
        ) : (
          <Text>{t('loading_data')}</Text>
        )}

        {/* Retry */}
        <Button title={t('retry')} onPress={fetchData} />

        {/* Navigation */}
        <Button title={t('go_to_details')} onPress={() => navigation.navigate('Details')} />
      </View>
    </GestureHandlerRootView>
  );
}

// 📄 Details Screen
function DetailsScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('details_screen')}</Text>
    </View>
  );
}

// 🚀 App Root
export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 🎨 Styles
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
