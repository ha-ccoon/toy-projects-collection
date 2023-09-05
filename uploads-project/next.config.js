// /** @type {import('next').NextConfig} */
// const { i18n, debug } = require('./next-i18next.config.js');
import settings from './next-i18next.config.js';

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['ko', 'en'],
  },
  async rewrites() {
    return [
      {
        source: '/thumbnail',
        destination: 'http://localhost:5000/api/thumbnail',
      },
    ];
  },
};

export default nextConfig;
