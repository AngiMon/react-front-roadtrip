import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';


// the translations
const resources = {
  fr: {
    translation: translationFR
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    react: {
        useSuspense: false
    },
    resources,
    returnObjects: true,
    lng: "fr",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;