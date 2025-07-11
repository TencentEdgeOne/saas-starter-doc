import createWithNextra from 'nextra'

const withNextra = createWithNextra({
  defaultShowCopyCode: true,
  unstable_shouldAddLocaleToLinks: true,
})


/**
 * @type {import("next").NextConfig}
 */
export default withNextra({
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  reactStrictMode: true,
  cleanDistDir: true,
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
})
