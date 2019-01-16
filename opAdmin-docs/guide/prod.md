# 发布
发布涉及点：环境、编译、发包，基于 gitlab ci 自动化发布


## 前提
* 当前应用代码托管在 gitlab
* 指定服务器安装 ci runner
* gitlab 上开启 ci 配置和关联 ci runner

## 快速上手
* ci 配置文件：.gitlab-ci.yml，包含了安装依赖、编译代码、上传代码等逻辑
* 上传代码是通过 插件 vue-cli-movefiles 实现，该插件的配置在 vue.config.js 中 pluginOptions 配置