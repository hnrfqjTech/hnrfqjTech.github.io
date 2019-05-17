# HmUi

> **HmUi** 是基于Vue 2.x,在[ ElementUI ](http://element.eleme.io/#/zh-CN/component/installation)二度封装形成的组件库，提高组件复用性，提高开发效率

## 1.接入指引

#### 默认使用npm安装方式

```shell
npm i -D hm-ui
```

#### 如何在项目中使用hm-ui
在Vue初始化过程中，加入hm-ui的安装代码

```javascript
import Vue from 'vue';
import HmUi from 'hm-ui';

Vue.use(HmUi);
```

## 2.组件列表
见侧边栏

## 3.组件开发流程
#### 评审阶段
1. 在hm-ui的仓库中创建issue
2. 参考 模板 填入内容，并指派评审人员
3. 相关人员评审组件设计，并在issue中讨论同步
4. 确认设计ok，进入开发阶段

#### 开发阶段
1. 在git仓库中创建新的分支，并以组件作为分支名称 `feature/hm-{name}`
2. 开发完毕后发起MR合并到master
3. code review <--> 修改
4. 确认代码及功能ok，合并到master并`关闭`对应的issue
5. 设置版本号，发布新版本

#### 渐进式开发说明
业务组件一般都是在各自的业务线先封装内部组件，使用一段时间经过考察期稳定后，申请迁移至 hm-ui（开新分支 feature/hm-{name}）