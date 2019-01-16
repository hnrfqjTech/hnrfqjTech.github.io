# 开发
开发环节涉及点

## 快速上手
* 启动：src/bootstrap 中自定义配置 axios，ui、样式、组件等
* 应用配置 & webpack 配置：vue.config.js，具体配置参考[文档](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)
* 组件化：src/components 中聚合应用内组件和外部组件，渐进式开发和迭代组件库
* 图标：默认使用 Element 自带 icon，其他可以从[iconfont.cn](iconfont.cn) 获取、config/env 中修改 iconfontUrl 的值；
* 抽象&拓展：src/extend 中 vue 指令、宏、过滤器等
* 客户端环境变量：package.json scripts 中已内置了3套环境，在页面中使用示例： const { NODE_ENV, VUE_APP_C } = process.env; 想了解配置原理，[点我](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)
* 页面：src/page 只放骨架页面，如 首页、登录页、错误页等
* 视图&业务页：src/views 按业务场景
* 可视化配置：src/visualize 目录下包含模板、预览示例、页面、页面配置
* 数据：src/store 下基于 vuex 的状态管理。另外 src/store-helper 提供了数据获取增强方案，更简单、更快、更轻松的管理数据
* 更多开发指南，可以参考 vue-cli3 中的浏览器兼容性、资源、css 相关、webpack 相关、环境、部署等 [详情](https://cli.vuejs.org/zh/guide/browser-compatibility.html)