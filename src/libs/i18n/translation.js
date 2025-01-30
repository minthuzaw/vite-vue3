import i18n from '@/libs/i18n'
import { useLocaleStore } from '@/store/localeStore'
import { nextTick } from 'vue'

const Trans = {
  get currentLocale() {
    return i18n.global.locale.value
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale
  },

  async switchLanguage(newLocale) {
    await Trans.loadLocaleMessages(newLocale)
    Trans.currentLocale = newLocale
    document.querySelector('html').setAttribute('lang', newLocale)
    const localeStore = useLocaleStore()
    localeStore.setLocale(newLocale)
  },

  async loadLocaleMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/libs/i18n/locales/${locale}.json`)
      i18n.global.setLocaleMessage(locale, messages.default)
    }

    return nextTick()
  }
}

export default Trans
