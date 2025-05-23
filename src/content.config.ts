import { /* docsLoader, */ i18nLoader } from '@astrojs/starlight/loaders'
import { /* docsSchema, */ i18nSchema } from '@astrojs/starlight/schema'
import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'
import type { Locales } from './services/locale'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog', generateId: ({ entry }) => entry }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().optional().nullable(),
    author: z.string(),
    author_image_url: z.string(),
    author_url: z.string(),
    created_at: z.date().transform((dat) => dat.toISOString()),
    updated_at: z.date().transform((dat) => dat.toISOString()),
    head_image: z.string().optional(),
    head_image_alt: z.string().optional(),
    keywords: z.string().optional(),
    tag: z.string().transform((j) => {
      let tmp = ''
      const splitTags = j.trim().split(',')
      splitTags.forEach((p, index) => {
        tmp += p.trim()
        if (index < splitTags.length - 1) tmp += ','
      })
      return tmp
    }),
    published: z.boolean().optional(),
    locale: z.string() as z.ZodType<Locales>,
    next_blog: z.string().optional().nullable(),
  }),
})

const plugin = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plugins-tutorials', generateId: ({ entry }) => entry }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    created_at: z.union([z.string(), z.date()]).optional(),
    slug: z.string().optional(),
    published: z.boolean().optional(),
    locale: z.string().optional() as z.ZodType<Locales>,
  }),
})

export const collections = {
  blog,
  plugin,
  // docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
}
