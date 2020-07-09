/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      padding: {
        default: '1rem',
        sm: '2.25em',
        md: '3rem',
        lg: '2rem',
        xl: '45px',
      },
    },
    extend: {
      colors: {
        primary: {
          light: '#E3E6E9',
          gray: '#748290',
          default: '#2D3643',
          dark: '#2D3643',
        },
        secondary: {
          light: '#86B9D5',
          default: '#569DC3',
          dark: '#3A80A6',
        },
        shadow: '#00000029',
        danger: '#EA5B5B',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
