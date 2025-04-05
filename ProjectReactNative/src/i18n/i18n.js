import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en.json';
import fr from './locales/fr.json';

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: async cb => {
      const storedLanguage = await AsyncStorage.getItem('user-language');
      if (storedLanguage) {
        cb(storedLanguage);
      } else {
        const bestLang = RNLocalize.findBestAvailableLanguage(['en', 'fr']);
        cb(bestLang?.languageTag || 'en');
      }
    },
    init: () => {},
    cacheUserLanguage: async lng => {
      await AsyncStorage.setItem('user-language', lng);
    }
  };

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    interpolation: {
      escapeValue: false
    }
  });
  
  

export default i18n;
