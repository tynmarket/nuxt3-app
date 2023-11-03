// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link: [{ rel: 'icon', href: '/icon.png' }],
    },
  },
  css: ['/assets/css/style.css'],
  devtools: { enabled: true },
  vite: {
    server: {
        watch: {
            usePolling: true
        }
    },
  }
})
