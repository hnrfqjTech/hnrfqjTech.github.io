# 工具函数
常用的工具函数

## 使用
```base
import { timeFormat } from '@hnrfqj/hm-helper/util';
```

## API
* timeFormat(dateObj, formater)
  * 时间戳转日期字符串
    * dateObj 日期对象： new Date(时间戳)
    * format 格式：yyyy.MM.dd hh:mm'
    * returns 日期字符串
* throttle(method, obj, time)
  * 节流器
    * method
    * obj
* stopBubble(event)
  * 阻止冒泡
    * event
* stopDefault(event)
  * 阻止默认事件
    * event
* setCookie(name, value, options, type)
  * 设置cookie
    * name
    * value
    * options
* getCookie(name, type)
  * 获取cookie
    * name
* getUA()
  * 获取页面 UserAgent
    * 返回值   isUA: string, isWechat: boolean, isQQ: boolean, isQQBrowser: boolean, isUC: boolean, isIos: boolean, isAndroid: boolean, isUcsdk: boolean, isNG: boolean, isNGios: boolean, isNGandroid: boolean




