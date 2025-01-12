// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content'],
  devtools: { enabled: true },
  css: ['~/assets/stylesheets/globals.css'],
  content: {},
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
});
