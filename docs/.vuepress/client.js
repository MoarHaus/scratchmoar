import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    // Load client-only modules here
    if (!__VUEPRESS_SSR__) {
      await import('../../src/index.js')
    }
  },
})