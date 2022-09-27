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

## tailwindcss

[官网](https://tailwindcss.com/docs/installation/using-postcss)

### 安装
```
npm install -d tailwindcss postcss autoprefixer
npx tailwindcss init // 初始化配置文件
```

### 配置
```
module.exports = {
  // 应用文件类型
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {},
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
