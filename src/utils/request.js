import axios from 'axios'
import { getCookie } from '@/utils/useTool.js'

console.log(import.meta.env.DEV, import.meta.env.PROD)

const Http = axios.create({
  baseURL: 'https://vercel.younglina.top/api',
  withCredentials: true,
  timeout: 20000, // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
Http.interceptors.request.use(
  config => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    if (!config.params) config.params = {}
    config.params.cookie = `MUSIC_U=${getCookie('MUSIC_U')};`
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// 后置拦截器（获取到响应时的拦截）
Http.interceptors.response.use(
  response => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    if (response.data.code !== 200) {
      console.error(
        `Code: ${response.data.code}, Message: ${response.data.msg}`,
      )
    } else {
      return response.data
    }
  },
  error => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      console.error(`Code: ${code}, Message: ${msg}`)
    } else {
      console.error(`${error}`)
    }
    return Promise.reject(error)
  },
)

export default Http