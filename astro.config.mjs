import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite'
import { filterSitemapByDefaultLocale, i18n } from 'astro-i18n-aut/integration'
import { defineConfig, envField } from 'astro/config'
import { readFileSync } from 'node:fs'
import starlightImageZoom from 'starlight-image-zoom'
import starlightLlmsTxt from 'starlight-llms-txt'
import { defaultLocale, localeNames, locales } from './src/services/locale'

const siteConfig = JSON.parse(readFileSync(new URL('./configs.json', import.meta.url), 'utf8'))

export default defineConfig({
  trailingSlash: 'always',
  site: `https://${siteConfig.base_domain.prod}`,
  build: {
    concurrency: 2,
  },
  env: {
    validateSecrets: true,
    schema: {
      ORAMA_CLOUD_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      ORAMA_CLOUD_API_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
  plugins: [
    paraglideVitePlugin({
      outdir: './src/paraglide',
      project: './project.inlang',
      disableAsyncLocalStorage: true,
    }),
  ],
  i18n: {
    locales,
    defaultLocale,
    routing: {
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    i18n({
      locales: localeNames,
      defaultLocale,
      redirectDefaultLocale: false,
      exclude: ['pages/**/*.json.ts'],
    }),
    sitemap({
      i18n: {
        defaultLocale,
        locales: localeNames,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
    starlight({
      title: 'CodePushGo',
      plugins: [starlightImageZoom({ showCaptions: false }), starlightLlmsTxt()],
      disable404Route: true,
      logo: { src: './public/logo.png', replacesTitle: true },
      markdown: { headingLinks: false },
      customCss: ['./src/css/docs.css'],
      expressiveCode: { themes: ['github-dark'] },
      editLink: { baseUrl: 'https://github.com/CodePushGo/website/edit/main/' },
      components: {
        Head: './src/components/doc/Head.astro',
        Search: './src/components/doc/Search.astro',
      },
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/VnYRvBfgA6' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/CodePushGo/' },
      ],
      sidebar: [
        {
          label: 'Welcome to CodePushGo',
          link: '/docs/',
        },
        {
          label: 'Quickstart',
          collapsed: false,
          autogenerate: { directory: 'docs/getting-started' },
        },
        {
          label: 'CodePushGo CLI',
          collapsed: true,
          items: [
            { label: 'Overview', link: '/docs/cli/overview' },
            {
              label: 'Command reference',
              collapsed: false,
              autogenerate: { directory: 'docs/cli/reference' },
            },
            {
              label: 'Migrations',
              collapsed: true,
              autogenerate: { directory: 'docs/cli/migrations' },
            },
          ],
        },
        {
          label: 'Live Updates',
          collapsed: true,
          autogenerate: { directory: 'docs/live-updates' },
        },
        {
          label: 'Public API',
          collapsed: true,
          autogenerate: { directory: 'docs/public-api' },
        },
        {
          label: 'React Native updater',
          collapsed: true,
          items: [
            { label: 'Overview', link: '/docs/plugin/overview' },
            { label: 'Update behavior', link: '/docs/live-updates/update-behavior' },
            { label: 'Channels', link: '/docs/live-updates/channels' },
            { label: 'Rollbacks', link: '/docs/live-updates/rollbacks' },
            { label: 'Debugging', link: '/docs/plugin/debugging' },
          ],
        },
        {
          label: 'Console',
          collapsed: true,
          autogenerate: { directory: 'docs/webapp' },
        },
        {
          label: 'How To',
          link: '/docs/how-to/',
        },
        {
          label: 'FAQ',
          link: '/docs/faq/',
        },
        {
          label: 'How to get support',
          link: '/docs/getting-help/',
        },
      ],
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
  },
  preview: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
