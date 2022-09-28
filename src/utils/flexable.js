import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
// 判断是否为移动设备,使用宽度为了响应式处理
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
}) 