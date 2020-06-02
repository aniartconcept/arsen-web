import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import en from './en/global.json';

i18n.use(initReactI18next).init({
  language: 'en',
  resources: {
    en: { translations: en }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.changeLanguage('en');

export default i18n;
