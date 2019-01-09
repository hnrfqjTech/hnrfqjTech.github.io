module.exports = {
  base: '/rfqj-cli/',
  dest: 'rfqj-cli',
  host: '0.0.0.0',
  port: 9000,
  head: [
    [ 'link', { rel: 'icon', href: `/logo.png` } ],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    [ 'meta', { name: 'theme-color', content: '#3eaf7c' } ],
    [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' } ],
    [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'rfqj-cli',
      description: '命令集',
    },
  },
  themeConfig: {
    sidebarDepth: 0,
    activeHeaderLinks: false, // 嵌套的标题链接和 URL 中的 Hash同步更新；可提升性能
    repo: 'hnrfqjTech/hnrfqjTech.github.io',
    // repoLabel: 'github',
    editLinks: true,
    docsDir: 'rfqj-cli-docs',
    locales: {
      '/': { // 多语言-根目录时
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        editLinkText: '帮助我们改善此页面！',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '更新记录', link: 'https://github.com/hnrfqjTech/rfqj-cli/blob/master/CHANGELOG.md' },
        ],
        sidebar: [
          [ '/guide/', '介绍' ],
          {
            title: '功能',
            collapsable: false,
            children: [
              '/guide/clone',
            ]
          }
        ]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@p': '.vuepress/public'
      }
    }
  },
}