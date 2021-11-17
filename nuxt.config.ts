import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3 cart example',
  },
  buildModules: [
    '@vueuse/core/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  unocss: {
    shortcuts: [
    ],
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
})
