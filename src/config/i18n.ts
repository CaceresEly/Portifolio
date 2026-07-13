import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import ptBR from '../locales/pt_br.json';

const storedLanguage = localStorage.getItem('language');

const initialLanguage =
  storedLanguage === 'pt-BR' || storedLanguage === 'en'
    ? storedLanguage
    : 'en';

document.documentElement.lang = initialLanguage;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    'pt-BR': {
      translation: ptBR,
    },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };