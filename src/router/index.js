import { createRouter, createWebHistory } from 'vue-router'
// import { isMobileTerminal } from '../utils/flexable'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/playList',
      name: 'PlayList',
      component: () => import('@/views/playlist.vue')
    }
  ]
})

export default router