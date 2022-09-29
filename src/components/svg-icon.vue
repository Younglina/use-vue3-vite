<template>
  <svg :width="size" :height="size" aria-hidden="true" :class="fillClass">
    <use :xlink:href="iconName" :fill="color"/>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  fillClass: {
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