// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja', prefix: 'og: https://ogp.me/ns#',
      },
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'hirolog' },
        { property: 'og:title', content: 'hirolog' },
        { property: 'og:url', content: 'https://hirolog.netlify.app/' },
        { property: 'og:image', content: '/images/ogp.jpg' },
        { property: 'og:description', content: '多趣味なフロントエンドエンジニアのアトリエ' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/icon.svg' },
      ],
    },
  },
  css: ['~/assets/stylesheets/globals.css'],
  content: {},
  routeRules: {
    '/**': { prerender: true },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
});
