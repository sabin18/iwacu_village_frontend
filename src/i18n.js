import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import translationIT from './locales/it/translation.json';
import translationENG from './locales/eng/translation.json';

// the translations
const resources = {
  
  
  it: {
    translation: translationIT,
  },
  
  eng: {
    translation: translationENG,
  },
};
const language =localStorage.getItem('language');
i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language==='rw'?'it':'en',
    fallbackLng: language==='rw'?'it':'en', // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
