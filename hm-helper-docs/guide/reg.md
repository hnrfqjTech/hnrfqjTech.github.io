# 正则
常用的正则表达式

## 使用
```base
import { isPhone } from '@hnrfqj/hm-helper/reg';

isPhone(18877621212)
// => true

isPhone(12343)
// => false
```

## API
* isPhone
* isEmail
* isIdCard
* isNumber（判断Number(金额等)，非负数，最多4位小数）
* isInt
