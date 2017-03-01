# vue-circle-choice

> A circle color choice with Vue.js

> ![](assets/demo.png)

## 安装

``` bash
npm install vue-circle-choice --save
```

## 引入

### 作为全局组件使用

``` javascript
//在项目入口文件
import Vue from 'vue';
import choiceColor from 'vue-circle-choice';

Vue.component('choiceColor', choiceColor);
```

### 作为局部组件使用

``` javascript
//在某个组件中
import choiceColor from 'vue-circle-choice';

export default {
  components: {
    choiceColor,
  },
};
```

## API

### Props

| 参数 | 类型 | 说明 |
| ------ | ---- | ---- |
| colors | Array | 圆环各部分背景色 |
| radius | String | 圆环半径 |

### Events

| 事件名 | 参数 | 说明 |
| ---- | ---- | ---- |
| updateColor | { index, color } | index: 按钮的索引;   color: 按下按钮的颜色 |

## 示例

使用 `pug` 代码：
``` pug
choice-color(:colors='colors', radius="10em", @updateColor='updateColor')
```

使用 `html` 代码：
``` html
<choice-color :colors='colors' radius='10em', @updateColor='updateColor'></choice-color>
```

组件数据及自定义事件：
``` javascript
data() {
  return {
    colors: [
      '#1ba6cc',
      '#189ba7',
      '#98c6ae',
      '#45a270',
      '#7cb325',
      '#eb9826',
    ],
    index: 0,
    color: this.colors[0],
  };
},
methods: {
  updateColor({ index, color }) {
    this.index = index;
    this.color = color;
  },
}
```

## bug和建议

如果在使用中遇到问题或者建议，欢迎提`issues`。