export default async ({Vue, options, router, siteData, isServer}) => {
  // Load client-only modules here
  // if (!__VUEPRESS_SSR__) {
    await import('../../src/index.js')
  // }
}