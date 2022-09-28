import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

// 判断是否为移动设备,使用宽度为了响应式处理
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

// 动态设置rem基准值
export const useREM = () => {
  const MAX_FONT_SIZE = 40
  document.addEventListener('DOMContentLoaded', () => {
    const htmlDom = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = Math.min(MAX_FONT_SIZE, fontSize)
    htmlDom.style.fontSize = fontSize + 'px '
  })
}