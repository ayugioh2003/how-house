// Fix Doc: https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'block-no-empty': null,
    // 'unit-whitelist': ['em', 'rem', 's'],
  },
}
