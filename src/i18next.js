import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ruTranslation from './locales/ru/translation.json'
import enTranslation from './locales/en/translation.json'

i18n.use(initReactI18next).init({
  lng: 'ru', // язык по умолчанию
  fallbackLng: 'ru', // если нет перевода для выбранного языка
  resources: {
    ru: {
      translation: ruTranslation
    },
    en: {
      translation: enTranslation
    }
  }
})

export default i18n
