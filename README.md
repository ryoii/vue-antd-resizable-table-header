<h1 align="center">Vue Antd Resizable Table Header</h1>

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-antd-resizable-table-header.svg?style=flat-square)](https://npmjs.com/package/vue-antd-resizable-table-header)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A resizable header component for `a-table` in [ant design for vue](https://2x.antdv.com/)

## Dependencies：

+ [Vue 3](https://github.com/vuejs/vue-next)
+ [ant design 2.x](https://github.com/vueComponent/ant-design-vue) for vue 3
+ [vue draggable resizable](https://github.com/mauricius/vue-draggable-resizable) (modified)

## Usage

### Install via npm

```
npm install vue-antd-resizable-table-header
```

### create a-table component

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

### define and set component prop for a-table

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

### Why all columns are resized while I'm resizing

Ant Design makes the column width reactive. If all columns that given an init width via `width` can't fill the table, Ant Design will let column calculate a suitable width for itself. So you should make sure the sum of all columns width is greater than the table width. Anothor feasible way is to define a auto width column at the end (such as the example case).

### Why vue 3

Ant Design 2.x supports vue 3.

### Must the columns be defined as a ref variable

Sure. The width of column will be change, so it must be a reactive variable.
