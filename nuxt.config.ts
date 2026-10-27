export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  css: ['~/assets/css/portfolio.css'],

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },

  devtools: { enabled: true },

  compatibilityDate: '2024-04-03',
})