module.exports = {
  target: 'serverless',
  i18n: {
    locales: ['en-gb', 'en-us'],
    defaultLocale: 'en-gb',
    localeDetection: false,
    domains: [
      {
        domain: 'localhost:3000',
        defaultLocale: 'en-us',
      }
    ],
  }
}
