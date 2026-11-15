// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://anycon.ai',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page), i18n: { defaultLocale: 'en', locales: { en: 'en', zh: 'zh-CN' } } })],
  vite: { plugins: [tailwindcss()] },
})
