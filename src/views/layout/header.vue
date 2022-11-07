<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
  const changePage = (c) => {
    router.go(c)
  }
</script>
<template>
  <header class="sticky top-0 left-0 z-10 h-[64px] flex items-center backdrop-saturate-150 backdrop-blur-lg bg-white/80">
    <div class="flex items-center">
      <wy-button name="left" @click="changePage(-1)"/>
      <wy-button name="right" @click="changePage(1)"/>
    </div>
    <div class="flex items-center flex-1 justify-center space-x-2">
      <wy-button name="首页" type="span" extClass="text-base text-blue-600"/>
      <wy-button name="发现" type="span" extClass="text-base"/>
      <wy-button name="音乐库" type="span" extClass="text-base"/>
    </div>
    <div class="flex items-center">
      <div class="bg-gray-200 h-[32px] rounded-[8px] flex items-center w-[200px] px-1">
         <input type="text" class="border-none text-base font-semibold bg-transparent w-[98%] outline-none" placeholder="搜索" />
      </div>
    </div>
  </header>
</template>
<style scoped lang='scss'>
</style>