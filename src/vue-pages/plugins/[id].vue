<script setup lang="ts">
import type { Plugin } from '@/config/plugins'
import { ref } from 'vue'

const props = defineProps<Plugin>()

const showReadme = ref(1)
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-row flex-wrap w-full px-10 lg:max-w-6xl xl:px-0">
      <a aria-label="Back To Tutorials" href="/tutorials/" class="max-w-max border-b border-white/10 pb-0.5 text-white/50 hover:text-white">← Back To Tutorials</a>
    </div>
    <div class="flex flex-row flex-wrap w-full gap-8 px-10 mt-6 lg:max-w-6xl xl:px-0">
      <button class="px-3 py-1 text-sm" :class="showReadme !== 0 ? 'rounded border border-white' : 'rounded border border-white/10'" @click="showReadme = 1">
        Tutorial on {{ props.title }}
      </button>
      <button class="px-3 py-1 text-sm" :class="showReadme === 0 ? 'rounded border border-white' : 'rounded border border-white/10'" @click="showReadme = 0">
        About {{ props.title }}
      </button>
    </div>
    <div class="flex flex-col items-center w-full mt-6">
      <div :class="showReadme === 1 ? 'hidden' : 'flex'" class="z-10 flex-row flex-wrap w-full gap-10 px-10 mb-8 md:flex-nowrap lg:max-w-6xl xl:px-0">
        <div class="flex flex-col w-full">
          <h1 class="mt-4 text-2xl font-bold md:text-4xl">
            {{ props.title }}
          </h1>
          <h1 class="mt-8 text-lg font-light md:text-xl">
            {{ props.description }}
          </h1>
          <div v-if="props.githubStars" class="flex flex-row items-center justify-between pt-2 mt-8 border-t border-white/10">
            <span class="text-sm font-semibold text-gray-200">GitHub Stars</span> <span class="text-gray-400">{{ props.githubStars }}</span>
          </div>
          <div v-if="props.npmDownloads" class="flex flex-row items-center justify-between pt-2 mt-4 border-t border-white/10">
            <span class="text-sm font-semibold text-gray-200">NPM Downloads</span> <span class="text-gray-400">{{ props.npmDownloads }}</span>
          </div>
          <div class="flex flex-row flex-wrap items-center justify-between">
            <a
              target="_blank"
              v-if="props.href"
              :href="props.href"
              aria-label="View Repo URL"
              class="w-full px-6 py-2 mt-8 text-sm text-center border rounded border-white/50 hover:border-white sm:w-auto"
            >
              View Repo &rarr;
            </a>
            <a
              target="_blank"
              v-if="props.name"
              aria-label="View NPM"
              :href="`https://www.npmjs.com/package/${props.name}`"
              class="w-full px-6 py-2 mt-8 text-sm text-center border rounded border-white/50 hover:border-white sm:w-auto"
            >
              View on NPM &rarr;
            </a>
          </div>
          <div v-if="props.readme" id="readme" class="my-8 prose" v-html="props.readme" />
        </div>
      </div>
    </div>
    <div
      v-if="props.tutorial"
      id="tutorial"
      :class="showReadme !== 1 ? 'hidden' : 'block'"
      class="w-full px-10 prose rounded-lg lg:max-w-6xl xl:px-4 bg-gray-900/10"
      v-html="props.tutorial"
    />
  </div>
</template>

<style>
img[src*='badge'] {
  width: auto;
  height: 25px;
  margin-bottom: 10px;
}

img[src*='shields.io'] {
  width: auto;
  height: 25px;
  margin-bottom: 10px;
}
</style>
