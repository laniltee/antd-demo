import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import EN from './en'
import SI from './si'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EN,
      },
      si: {
        translation: SI,
      },
    },
  })

i18n.changeLanguage('en')
