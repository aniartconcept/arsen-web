import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './en/global.json';
//import ru from './ru/global.json';
//import hy from './hy/global.json';
import de from './de/global.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: en }
      //ru: { translations: ru },
      //hy: { translations: hy },
      //de: { translations: de }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    }
  });
if (i18n.language.includes('-')) {
  //i18n.changeLanguage(i18n.language.split('-')[0]);
}

export default i18n;
