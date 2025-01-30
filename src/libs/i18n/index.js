import { createI18n } from 'vue-i18n'
import en from '@/libs/i18n/locales/en.json'
import mm from '@/libs/i18n/locales/mm.json'

const i18n = createI18n({
  locale: localStorage.getItem('locale') || import.meta.env.VITE_I18N_FALLBACK_LOCALE,
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { en, mm },
  runtimeOnly: false
})

export default i18n
