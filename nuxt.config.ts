export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/global.scss',
    '~/assets/styles/elementPlus.scss'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_Base_URL
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@element-plus/nuxt',
    "@nuxtjs/i18n"
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})