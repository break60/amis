---
title: Badge 角标
description:
type: 0
group: ⚙ 组件
menuName: Badge
icon:
order: 30
---

## 基本用法

部分组件可以设置 `badge` 属性来显示角标。

> 1.2.2 及之前版本只支持头像组件
>
> 1.2.3 开始支持按钮、链接、模板组件。

```schema: scope="body"
[
  {
    "type": "avatar",
    "badge": {
      "mode": "text",
      "text": 10
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "action",
    "label": "按钮",
    "badge": {
      "mode": "text",
      "text": 15
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "link",
    "href": "https://www.baidu.com",
    "body": "百度一下，你就知道",
    "badge": {
      "position": "top-right"
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "tpl",
    "tpl": "Hello ${text}",
    "badge": {
      "mode": "text",
      "text": 25
    }
  },
  {
    "type": "divider"
  },
  {
    "type": "icon",
    "icon": "cloud",
    "className": "text-info text-xl",
    "badge": {
      "position": "top-left"
    }
  }
]
```

## 显示文字或数值

设置 `mode` 为 `text`，通过 `text` 属性来显示文字或数字，数值为零的时候将不显示。

```schema: scope="body"
[
  {
    "type": "avatar",
    "badge": {
      "mode": "text",
      "text": 10
    }
  },
  {
    "type": "avatar",
    "className": "m-l",
    "badge": {
      "mode": "text",
      "text": 0
    }
  },
  {
    "type": "avatar",
    "className": "m-l",
    "badge": {
      "mode": "text",
      "text": "new"
    }
  }
]
```

## 显示位置

通过 `position` 来控制角标显示位置，默认 `top-right`，还可以设置为 `top-left`、`bottom-left`、`bottom-right`。

```schema: scope="body"
[
  {
    "type": "avatar",
    "badge": {
      "position": "top-left"
    }
  },
  {
    "type": "avatar",
    "className": "m-l",
    "badge": {
      "position": "bottom-left"
    }
  },
  {
    "type": "avatar",
    "className": "m-l",
    "badge": {
      "position": "bottom-right"
    }
  }
]
```

## 动态数字

`text` 可以取上下文变量。

```schema
{
  "data": {
    "myData": 10
  },
  "type": "page",
  "body": [
    {
      "type": "avatar",
      "badge": {
        "mode": "text",
        "visibleOn": "this.myData > 1",
        "text": "${myData}"
      }
    }
  ]
}
```

## 动态控制是否显示角标

角标可以直接写表达式来判断是否显示

```schema
{
  "data": {
    "myData": 10
  },
  "type": "page",
  "body": [
    {
      "type": "avatar",
      "badge": "this.myData > 1"
    },
    {
      "type": "avatar",
      "className": "m-l",
      "badge": "this.myData > 10"
    }
  ]
}
```

还可以通过 `visibleOn` 表达式来动态控制，这样还能设置其他属性

```schema
{
  "data": {
    "myData": 10
  },
  "type": "page",
  "body": [
    {
      "type": "avatar",
      "badge": {
        "visibleOn": "this.myData > 1"
      }
    },
    {
      "type": "avatar",
      "className": "m-l",
      "badge": {
        "visibleOn": "this.myData > 10"
      }
    }
  ]
}
```

## 设置大小

通过 `size` 来控制大小

```schema: scope="body"
[
  {
    "type": "avatar",
    "badge": {
      "mode": "text",
      "text": 10,
      "size": 20
    }
  },
  {
    "type": "avatar",
    "className": "m-l",
    "badge": {
      "mode": "text",
      "text": 10,
      "size": 12
    }
  },
  {
    "type": "avatar",
    "className": "m-l",
    "badge": {
      "size": 12
    }
  },
  {
    "type": "avatar",
    "className": "m-l",
    "badge": {
      "size": 4
    }
  }
]
```

## 是否显示动画

在默认点状态下，可以通过设置 `animation` 属性来控制是否显示动画

```schema: scope="body"
[
  {
    "type": "avatar",
    "badge": {
      "animation": true
    }
  }
]
```

## 自定义样式

通过 `style` 来控制展现样式，比如背景及文字的颜色

```schema: scope="body"
[
  {
    "type": "avatar",
    "badge": {
      "mode": "text",
      "text": 10,
      "style": {
        "background": "#46C93A"
      }
    }
  },
  {
    "type": "avatar",
    "className": "m-l",
    "badge": {
      "mode": "text",
      "text": 10,
      "style": {
        "background": "#1A5CFF"
      }
    }
  }
]
```

## 属性表

| 属性名    | 类型      | 默认值 | 说明                      |
| --------- | --------- | ------ | ------------------------- |
| className | `string`  |        | 外层 dom 的类名           |
| text      | `text`    |        | 数字                      |
| mode      | `string`  |        | 角标类型，可以是 dot/text |
| className | `string`  |        | 外层 dom 的类名           |
| animation | `boolean` |        | 角标是否显示动画          |
| style     | `object`  |        | 角标的自定义样式          |
