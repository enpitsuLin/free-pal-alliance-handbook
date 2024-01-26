import type { NuxtI18nOptions } from '@nuxtjs/i18n'

export const i18n: NuxtI18nOptions = {
  lazy: true,
  strategy: 'no_prefix',
  detectBrowserLanguage: false,
  defaultLocale: 'zh-CN',
  langDir: 'locales',
  locales: [
    {
      code: 'zh-CN',
      file: 'zh-CN.json',
    },
  ],
}
