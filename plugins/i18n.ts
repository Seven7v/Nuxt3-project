import { createI18n } from 'vue-i18n'
import en from '../i18n/en'
import zh from '../i18n/zh'

export default defineNuxtPlugin(({ vueApp }) => {
  const language = useCookie('lang').value || 'en'
  const i18n = createI18n({
    fallbackLocale: 'zh',
    locale: language,
    messages: {
      zh,
      en
    }
  })

  vueApp.use(i18n)
})
