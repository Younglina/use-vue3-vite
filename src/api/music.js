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

/**
 * 获取歌单详情
 * 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id,
 * 可以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，
 * 但是返回的 trackIds 是完整的，tracks 则是不完整的，
 * 可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情
 * 必选参数 : id : 歌单 id
 * 可选参数 : s : 歌单最近的 s 个收藏者,默认为 8
 * 接口地址 : /playlist/detail
 * 调用例子 : /playlist/detail?id=24381616
 */
 export function getPlaylistDetail({ id, s = 8 }) {
  return axios({
    method: 'get',
    url: '/playlist/detail',
    params: { id, s },
  })
}

export const testError = () => {
  return request.get('/error')
}