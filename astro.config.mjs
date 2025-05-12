import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite'
import { filterSitemapByDefaultLocale, i18n } from 'astro-i18n-aut/integration'
import { defineConfig, envField } from 'astro/config'
import config from './configs.json'
import { defaultLocale, localeNames, locales } from './src/services/locale'

export default defineConfig({
  trailingSlash: 'always',
  site: `https://${config.base_domain.prod}`,
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
  redirects: {
    '/docs/getting-started/': {
      status: 302,
      destination: '/docs/plugin/cloud-mode/getting-started/',
    },
    '/docs/plugin/cloud-mode/getting-started/': {
      status: 302,
      destination: '/docs/getting-started/quickstart',
    },
  },
  i18n: {
    locales,
    defaultLocale,
    // fallback: locales
    //   .filter((i) => i !== defaultLocale)
    //   .reduce((r, h) => {
    //     r[h] = defaultLocale
    //     return r
    //   }, {}),
    routing: {
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    paraglideVitePlugin({
      outdir: './src/paraglide',
      project: './project.inlang',
      disableAsyncLocalStorage: true,
    }),
    i18n({
      locales: localeNames,
      defaultLocale,
      redirectDefaultLocale: true,
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
      disable404Route: true,
      title: 'CodePushGo',
      favicon: '/favicon.svg',
      logo: { src: './logo.svg' },
      customCss: ['./src/css/global.css'],
      components: {
        LanguageSelect: './src/components/LanguageSelect.astro',
        Search: './src/components/doc/Search.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/codepushgo/website/edit/main/',
      },
      social: {
        github: 'https://github.com/codepushgo/',
      },
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
          label: 'Plugin',
          collapsed: true,
          items: [
            { label: 'Overview', link: '/docs/plugin/overview' },
            {
              label: 'Cloud Mode',
              items: [
                { label: 'Getting Started', link: '/docs/plugin/cloud-mode/getting-started' },
                { label: 'Auto Update', link: '/docs/plugin/cloud-mode/auto-update' },
                { label: 'Channel System', link: '/docs/plugin/cloud-mode/channel-system' },
                { label: 'Hybrid Update', link: '/docs/plugin/cloud-mode/hybrid-update' },
                { label: 'Manual Update', link: '/docs/plugin/cloud-mode/manual-update' },
              ],
              collapsed: true,
            },
            {
              label: 'Self Hosted',
              items: [
                { label: 'Getting Started', link: '/docs/plugin/self-hosted/getting-started' },
                { label: 'Contributing', link: '/docs/plugin/self-hosted/contributing' },
                { label: 'Auto Update', link: '/docs/plugin/self-hosted/auto-update' },
                { label: 'Manual Update', link: '/docs/plugin/self-hosted/manual-update' },
                { label: 'Encrypted Bundles', link: '/docs/plugin/self-hosted/encrypted-bundles' },
                { label: 'Handling Updates', link: '/docs/plugin/self-hosted/handling-updates' },
                { label: 'Handling Stats', link: '/docs/plugin/self-hosted/handling-stats' },
                { label: 'Local Development', autogenerate: { directory: 'docs/plugin/self-hosted/local-dev' }, collapsed: true },
              ],
              collapsed: true,
            },
            { label: 'Plugin methods', link: '/docs/plugin/api' },
            { label: 'Known Issues', link: '/docs/plugin/known-issues' },
            { label: 'Cordova', link: '/docs/plugin/cordova' },
            { label: 'Settings', link: '/docs/plugin/settings' },
            { label: 'Statistics', link: '/docs/plugin/statistics-api' },
            { label: 'Debugging', link: '/docs/plugin/debugging' },
          ],
        },
        {
          label: 'Public API',
          collapsed: true,
          autogenerate: { directory: 'docs/public-api' },
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
