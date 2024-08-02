import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'
import nav from './nav.mts'
import markdown from './markdown.mts'
// import { getNavData, getSidebarData } from './navSidebarUtil.mts'

export default defineConfig({
  title: "Yangfan",
  description: "A VitePress Site",
    // 最后更新时间
  lastUpdated: true,

  markdown: markdown,

  head:[
    [
        "link",
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
    ],
    [
        "script",
        { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" },
    ]
  ],

  themeConfig: {
    // 侧边栏
    sidebar: sidebar,
    // 导航
    nav: nav,
    // 目录
    outline: {
      label: '目录',
      level: 'deep'
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
