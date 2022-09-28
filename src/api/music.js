import axios from '@/utils/request.js'

/**
 * 推荐歌单
 * 说明 : 调用此接口 , 可获取推荐歌单
 * 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
 * 接口地址 : /personalized
 * 调用例子 : /personalized?limit=1
 */
export function getPersonalized(limit) {
  return axios({
    method: 'get',
    url: '/personalized',
    params: { limit },
  })
}

export function getHotPlayListCategory(limit) {
  return axios({
    method: 'get',
    url: '/playlist/hot',
    params: { limit },
  })
}



export const testError = () => {
  return request.get('/error')
}