import { i18n } from './config/i18n'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-module-eslint-config',
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    preset: 'service-worker',
    serverAssets: [
      {
        baseName: 'dataset',
        dir: './dataset',
      },
    ],
  },

  features: {
    inlineStyles: false,
  },

  eslintConfig: {
    setup: false,
  },

  devtools: { enabled: true },
  i18n,
})