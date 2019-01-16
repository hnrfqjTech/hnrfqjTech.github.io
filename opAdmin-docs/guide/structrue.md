# 目录结构

```
├── README.md
├── babel.config.js
├── dist                            // 编译出的目录
│   ├── favicon.ico
│   ├── index.html
│   └── static
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── static                     // 静态资源，图片等
├── src                            // 源码
│   ├── App.vue
│   ├── api
│   ├── bootstrap                 // 启动文件目录
│   ├── components                // 应用内置组件
│   ├── config                    // 客户端配置
│   ├── const
│   ├── extend                    // 拓展目录，包含 vue 的插件、指令、过滤器等
│   ├── main.js
│   ├── mock
│   ├── page                      // 几个常用的页面：首页、登录页、错误页、顶部、侧边栏等
│   ├── permission.js             // 路由权限配置
│   ├── plugins
│   ├── router
│   ├── store
│   ├── store-helper             // vuex 增强方案源码
│   ├── styles
│   ├── util
│   ├── views                    // 业务页面代码
│   └── visualize                // 可视化配置页面源码
├── tests
│   └── unit
└── vue.config.js                // webpack & 应用配置文件
```


