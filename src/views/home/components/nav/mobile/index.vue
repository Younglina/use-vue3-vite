<script setup>
defineProps({
  category: {
    type: Array,
  }
})
</script>

<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
      <li v-for="item in category" :key="item.id" class="shrink-0 px-0.5 py-0.5 z-10 duration-200 text-xs">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<style scoped lang='scss'>

</style> 