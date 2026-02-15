// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts', '@nuxtjs/tailwindcss', 'v-gsap-nuxt'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  app: {
    head: {
      title: 'FRONTEND ENGINEER nrieee',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      htmlAttrs: {
        lang: 'ja'
      }
    }
  }
})