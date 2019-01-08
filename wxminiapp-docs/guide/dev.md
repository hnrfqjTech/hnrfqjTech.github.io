# 开发
开发环节涉及点

## 快速上手
* 面路由和标题、tabbar、分包、全局配置等：src/app.json
* 页面：src/pages
* 组件：src/components 自己封装 vue 风格的组件，也可以用小程序官方的组件
* 样式：src/css，支持 *.css、*.scss，单位用 rpx
* 静态资源：static 目录，webpack 不会构建，仅仅 copy。资源较大时建议上 CDN
* 请求层和状态管理：src/api、src/store。请求库使用 flyio
* 辅助、拓展、配置等 src/utils、src/extend、src/config
* 生命周期函数：支持 vue 和 小程序2者的生命周期，常用 mounted、onLoad,、onShow
* 事件：bind向上冒泡，catch 不冒泡。捕获原生中是支持的；mpvue 做了映射，子元素通过event.stop 可阻止冒泡
* dom
  * [Dom 操作](https://developers.weixin.qq.com/miniprogram/dev/api/wx.createSelectorQuery.html)
  * 层级: cover-view 与 cover-image > 原生组件 > css 样式
* 授权：推荐用 button 按钮
* 分包：subpackages 中配置，有普通分包、独立分包、分包预下载
* 支付：生成订单、客户端拉起支付
* 开发权限：管理后台配置开发者




