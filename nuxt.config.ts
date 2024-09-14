
// nuxt.config.ts
export default defineNuxtConfig({
  // Adiciona os módulos Pinia e Tailwind CSS
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  // Configuração do Tailwind CSS
  css: [
    '@/assets/css/tailwind.css',
  ],

  compatibilityDate: '2024-09-14',
})

