import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
