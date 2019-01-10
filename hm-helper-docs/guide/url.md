# url
url 处理

## 使用
```base
import { getHostName } from '@hnrfqj/hm-helper/url';

getHostName();
// => http:
```

## API
* getHostName
  * 获取hostname
* getTopDomain
  * 获取顶级域名
* urlAddQuery(key, val, baseUrl)
  * 给指定的链接绑定query参数
    * key 参数
    * val 参数的值
    * baseUrl 指定的链接，默认不用传，取当前链接
    * returns {string} 新的链接
* getQueryByKey(key)
  * 根据url参数取值
    * key 参数
    * return 参数值
* urlClearQuery(url)
  * 链接去掉参数
* redirect(href, time)
  * URL重定向
    * href 跳转地址
    * time 等待时长


