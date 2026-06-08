import type { LocalePrefixMode } from 'next-intl/routing';

/** Locale prefix strategy for next-intl routing. */
const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Replace 'MyApp' with your project name before shipping
export const AppConfig = {
  name: 'Hokkaido',
  logo: '/assets/logo/hokkaidoBlack.png',
  i18n: {
    locales: ['en', 'fr', 'zh', 'ko', 'th', 'vi'],
    defaultLocale: 'en',
    localePrefix,
  },
};
