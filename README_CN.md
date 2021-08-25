<h1 align="center">Vue Antd Resizable Table Header</h1>

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-antd-resizable-table-header.svg?style=flat-square)](https://npmjs.com/package/vue-antd-resizable-table-header)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

可拖动改变宽度的 [ant design for vue](https://2x.antdv.com/) 表格表头组件

[English](./README.md) | 中文

## 依赖

+ [Vue 3](https://github.com/vuejs/vue-next)
+ [ant design 2.x](https://github.com/vueComponent/ant-design-vue) for vue 3
+ [vue draggable resizable](https://github.com/mauricius/vue-draggable-resizable) (修改后)

## 快速使用

### 通过 npm 安装

```
npm install vue-antd-resizable-table-header
```

### 创建一个 a-table 组件

```vue
/* HelloWorld.vue */ 

<template>
  <div class="hello">
    <a-table
      :scroll="{ x: '100%' }"
      :row-key="rowKey"
      size="small"
      bordered
      :columns="columns"
      :loading="loading"
    >
    </a-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const columns = ref([
  {
    key: "key1",
    dataIndex: "column",
    title: "column1",
    width: 300,
    ellipsis: true,
  },
  {
    key: "key2",
    dataIndex: "column2",
    title: "column2",
    width: 300,
    ellipsis: true,
  },
  {
    key: "key3",
    dataIndex: "column3",
    title: "column3",
    width: 300,
    ellipsis: true,
  },
  {
    key: "key4",
    dataIndex: "column4",
    title: "column4",
    width: 300,
    ellipsis: true,
  },
  {
    key: "key5",
    dataIndex: "column5",
    title: "column5",
    width: 300,
    ellipsis: true,
  },
  {
    key: "empty",
    dataIndex: "empty"
  }
]);
</script>
```

### 定义并设置 component 属性

```vue
<template>
  <div class="hello">
    <a-table
      <!-- ellipsis -->
      ...
      
      :components: "components"
    >
    </a-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueAntdResizableTableHeader from "vue-antd-resize-table-header.js"

const columns = {...}; // ellipsis

// define components
const components = {
  header: {
    cell: new VueAndtResizableTableHeader(columns).cell()
  }
};
</script>
```

## Q&A

### 为什么拖动时所有列的宽度都改变了

Ant Design 没有考虑列的宽度可变，它默认是响应式的. 如果所有列给定的列宽小于表格的宽度, Ant Design 会计算出列的自适应宽度. 所以使用时你要保证所有列宽度的和要大于表格的宽度. 另一个方法是, 定义一个伸缩列在最后，让触发自适应计算时, 让这个神所列填满表格的剩余空间, 就像上面例子里写的一样.

### 为什么使用 Vue 3

Ant Design 2.x 版本支持 Vue 3

### columns 需要被定义成响应式变量 ref 吗

是的. 计算过程中需要改变列的宽度, 它需要及时反馈到页面上