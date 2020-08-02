import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AppSingleton } from '@utils/singleton';
import languages from './languages';

const i18nInstance = i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupCookie: 'lang',
      lookupLocalStorage: 'lang',
    },
    resources: languages,
    lng: 'en',
    fallbackLng: 'en',
    ns: Object.keys(languages.en), // Map namespaces based on main language
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

i18nInstance.then((tFunction) => {
  AppSingleton.getInstance().setTranslator(tFunction);
});

export default i18nInstance;
