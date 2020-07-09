// Doc: https://github.com/covid19-oita/covid19/blob/development/nuxt-i18n.config.ts
// Doc: https://github.com/antfu/i18n-ally/wiki
export default {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
  },
  defaultLocale: 'en',
  lazy: true,
  langDir: 'assets/locales/',
  vueI18n: {
    fallbackLocale: 'en',
    formatFallbackMessages: true
  },
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.json'
    },
    {
      code: 'tw',
      iso: 'zh-TW',
      name: '繁體中文',
      file: 'zh-TW.json'
    },
  ],
  

}
