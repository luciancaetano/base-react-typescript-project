import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languages from './languages';

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: languages,
    lng: 'pt-br',
    fallbackLng: 'pt-br',

    interpolation: {
      escapeValue: false,
    },
  });
