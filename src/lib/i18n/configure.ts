/* eslint-disable @typescript-eslint/no-explicit-any */
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    resources: {
    },
    defaultNS: "translation",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'pt-BR'],
    react: {
      useSuspense: true,
    },
  });

export default i18n;