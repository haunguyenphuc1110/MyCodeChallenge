import I18n from 'react-native-i18n'

import en from './locales/en'
import vi from './locales/vi'

I18n.fallbacks = true

export const setLocale = (locale: string) => {
  I18n.locale = locale
}
I18n.defaultLocale = 'en-US'
I18n.locale = 'en-US'
export const getCurrentLocale = () => I18n.locale

I18n.translations = {
  en,
  vi,
}

export default I18n
