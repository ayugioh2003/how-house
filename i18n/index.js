import en from './lang/en-US.js'
import tw from './lang/zh-TW.js'

export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'tw',
      iso: 'zh-TW',
      name: '繁體中文',
    },
  ],
  defaultLocale: 'en',

  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, tw },
  },
}
