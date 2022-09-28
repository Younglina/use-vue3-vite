import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '../utils/flexable'
import pcRoutes from './modules/pc-routers.js'
import mobileRoutes from './modules/mobile-routers.js'

const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})

export default router