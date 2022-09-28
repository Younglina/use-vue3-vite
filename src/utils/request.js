import axios from 'axios'

console.log(import.meta.env.DEV,import.meta.env.PROD)

const Http = axios.create({
  baseURL: 'https://www.fastmock.site/mock/6b16c722604e6f9b79e16f7ec3a768d4/vue3vite',
})

export default Http