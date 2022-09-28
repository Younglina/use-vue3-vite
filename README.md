# Vue 3 + Vite

## 创建

:::
nodejs版本>14.18+
:::

```
npm create vite@latest
```
然后按照提示操作即可！

## 运行

```
{
  "scripts": {
    "dev": "vite", // 启动开发服务器，可加 --host 开启局域网访问
    "build": "vite build", // 为生产环境构建产物
    "preview": "vite preview" // 本地预览生产构建产物
  }
}
```
可以指定额外的命令行选项，如`--port`或`--https`

## [tailwindcss](https://tailwindcss.com/docs/installation/using-postcss)

### 安装
```
npm install -d tailwindcss postcss autoprefixer
npx tailwindcss init // 初始化配置文件tailwind.config.js,postcss.config.js
```

### 配置
```
//tailwind.config.js
module.exports = {
  // 应用文件类型
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      // 重置fontSize:[fontSize,lineHeight]
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.45rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem'],
      }
    },
  },
  plugins: [],
  // 配置提示 需要vscode安装tailwind插件
  "files.associations": {
    "*.vue": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

### 使用
新建`src/styles/index.scss`，添加`tailwind`指令
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
在`main.js`中导入即可
```
...
import './styles/index.scss'
```

## [vueuse](https://vueuse.org/guide/)
vue的组合式工具库

### 安装
```
npm i @vueuse/core
```

### 使用

响应式的窗口大小
```
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
```

## [环境变量](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables)

Vite 在一个特殊的 import.meta.env 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：

- import.meta.env.MODE: {string} 应用运行的模式。
- import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由base 配置项决定。
- import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
- import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
- import.meta.env.SSR: {boolean} 应用是否运行在 server 上。

### 自定义
可在根目录新建`.env.development`和`.env.production`。  

为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。例如下面这些环境变量：  
```
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```
只有 VITE_SOME_KEY 会被暴露为 import.meta.env.VITE_SOME_KEY 提供给客户端，而 DB_PASSWORD 则不会。