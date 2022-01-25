// import i18n from './nuxt-i18n.config'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Doc: https://material.io/resources/icons/?style=baseline
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  // DOC: https://ithelp.ithome.com.tw/articles/10200858
  // DOC: https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  // DOC: https://www.nuxtjs.cn/api/configuration-env
  env: {
    HOTEL_API: process.env.HOTEL_API,
    TOKEN: process.env.TOKEN,
    PAYMENT_URL: process.env.PAYMENT_URL,
    MERCHANT_ID: process.env.MERCHANT_ID,
    HASH_KEY: process.env.HASH_KEY,
    HASH_IV: process.env.HASH_IV,
  },
  /*
   ** Global CSS
   ** See: https://zh.nuxtjs.org/api/configuration-css/
   */ css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // DOC: https://github.com/mengxiong10/vue2-datepicker
    // DEMO: https://mengxiong10.github.io/vue2-datepicker/
    {
      src: '~/plugins/vue2-datepicker.js',
      ssr: false,
    },
    // DOC: https://juejin.cn/post/6904916344731336718
    {
      src: '@/plugins/moment.js',
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/dotenv-module
    // https://levelup.gitconnected.com/what-are-env-files-and-how-to-use-them-in-nuxt-7f194f083e3d
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html
    // 'nuxt-i18n',
    // Doc: https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    // https://github.com/shakee93/vue-toasted
    '@nuxtjs/toast',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** nuxt-i18n module configuration
   ** See https://nuxt-community.github.io/nuxt-i18n/basic-usage.html
   */
  // i18n,
  /*
   ** tailwindcss module configuration
   ** See https://github.com/nuxt-community/tailwindcss-module
   ** Demo https://codesandbox.io/s/l3d5j?file=/nuxt.config.js:162-173
   */
  tailwindcss: {
    configPath: './tailwind.config.js',
    cssPath: '~/assets/scss/tailwind.scss',
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  serverMiddleware: [
    // {
    //   path: '/thanks',
    //   handler: './server-middleware/postRequestHandler.js',
    // },
    '@/server-middleware/api.js',
  ],
}
