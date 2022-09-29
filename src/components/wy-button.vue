<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
  },
  type: {
    type: String,
    default: 'svg',
  },
  extClass: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '22',
  },
})
const iconName = computed(() => {
  return `#icon-${props.name}`
})
</script>
<template>
  <button :class="['button-icon hover:bg-slate-100 active:scale-90', extClass]">
    <svg v-if="type==='svg'" :width="size" :height="size" aria-hidden="true" :fill="color">
      <use :xlink:href="iconName"/>
    </svg>
    <span v-else>{{name}}</span>
  </button>
</template>