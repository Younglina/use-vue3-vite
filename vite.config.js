import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { join, resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
    })
  ],
  server: {
    proxy: {
      '/test': {
        target: 'https://www.pexels.com/_next/data/OXmwxgeQziUxOQ8OQ5s21/zh-CN/',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  }
})
