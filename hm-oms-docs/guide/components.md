# 组件

## 组件标题1
组件描述1

#### 代码演示
基本用法 [点击预览](http://www.google.com/)
```html
<hm-panel title="标题" subTitle="副标题">
  <div>内容</div>
</hm-panel>
```
slot 用法 [点击预览](http://www.google.com/)
```html
<hm-panel title="标题" subTitle="副标题" :showIcon="false">
  <div slot="header-right">
    <el-button type="primary" size="small">按需传入</el-button>
  </div>

  <div>内容</div>
</hm-panel>
```

#### 参数说明
| 参数 | 说明 | 类型|  可选值 | 默认值 |
|-----|:----------|:------|:------------|:--------|
| title | 标题 |  String | － | - |
| subTitle | 副标题 |  String | － |  |
| showIcon | 显示 icon |  Boolean | － | true |
| icon | 显示 icon |  String | － | el-icon-news |

#### slot
* name="header-right"
* 默认（内容）


## 组件标题2
组件描述1

#### 代码演示
基本用法 [点击预览](http://www.google.com/)
```html
<hm-panel title="标题" subTitle="副标题">
  <div>内容</div>
</hm-panel>
```

#### 参数说明
| 参数 | 说明 | 类型|  可选值 | 默认值 |
|-----|:----------|:------|:------------|:--------|
| title | 标题 |  String | － | - |
| subTitle | 副标题 |  String | － |  |
| showIcon | 显示 icon |  Boolean | － | true |
| icon | 显示 icon |  String | － | el-icon-news |
