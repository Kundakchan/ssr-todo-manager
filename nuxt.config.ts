// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@ant-design-vue/nuxt'
  ],
  css: ['~/assets/styles/main.scss'],
  runtimeConfig: {
    FIREBASE_CONNECTION: {
      apiKey: process.env.FIREBASE_API_KEY
    },
    public: {
      FIREBASE_CONNECTION: {
        apiKey: process.env.FIREBASE_API_KEY
      }
    }
  }
})
