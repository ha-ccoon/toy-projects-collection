// /** @type {import('next-i18next').UserConfig} */
// const { i18n } = require('next-i18next');

// module.exports = {
//   debug: process.env.NODE_ENV === 'development',
//   i18n: {
//     defaultLocale: 'ko',
//     locales: ['ko', 'en'],
//   },
//   localePath:
//     typeof window === 'undefined'
//       ? require('path').resolve('./public/locales')
//       : '/locales',
// };

// settings.js
const settings = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },
};

export default settings;
