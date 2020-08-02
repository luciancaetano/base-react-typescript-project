import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languages from './languages';

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupCookie: 'lang',
      lookupLocalStorage: 'lang',
    },
    resources: languages,
    lng: 'pt-br',
    fallbackLng: 'pt-br',
    ns: Object.keys(languages['pt-br']),
    defaultNS: 'global',
    lowerCaseLng: true,
    supportedLngs: Object.keys(languages), // https://www.metamodpro.com/browser-language-codes
    saveMissing: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    },
  });
