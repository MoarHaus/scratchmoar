module.exports = {
  lang: 'en-US',
  port: 8000,
  title: 'Scratchmoar',
  description: "Scratch Blocks extension that'll add local storage, devlog pages, Notion backend, scratchblocks coding, realtime collab, and Ai editing tools",
  head: [
    ['link', { rel: 'icon', href: '/img/moooar.png' }],
  ],

  themeConfig: {
    logo: '/img/moooar.png',
    repo: 'https://github.com/mooooar/scratchmoar',
    // sidebar: [
    //   {
    //     text: 'Home',
    //     link: '/',
    //   }
    // ],
    navbar: [
      {
        text: 'Home',
        link: '/',
      }
    ],
  }
}